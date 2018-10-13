import React, { Component } from 'react';
import Player from '../gameObjects/Player.js';
import Monster from '../gameObjects/Monster.js';

import CharacterProfile from './common/characterProfile';
import CharacterInventory from './common/characterInventory';
import CharacterLocation from './common/characterLocation';
import DirectionalPad from './directionalPad';
import BattlePad from './battlePad';
import QuestLog from './questLog';

import { getLocations, getLocation } from './services/locationService.js';
import { getMonster } from './services/monsterService.js';
import { getItems, getItem } from './services/itemService.js';
import { getWeapons, getWeapon } from './services/weaponService.js';

class Game extends Component {
    state = {
        player: '',
        locations: [],
        currentLocationId: '',
        currentMonster: ''
    };

    componentWillMount() {
        const playerData = JSON.parse(this.props.match.params.characterData);
        const player = new Player(10, 10, 0, 0, 1, playerData.characterName, playerData.race);

        const weapons = getWeapons();
        player.addToInventory({ "_id": weapons[0]._id, "itemId": weapons[0].itemId, "type": "weapon" });

        const locations = getLocations();

        // Initial current location to first in list
        const currentLocationId = locations[0]._id;

        const currentMonster = this.setMonster(locations[0].residingMonster);

        this.setState({ player, locations, currentLocationId, currentMonster });
    }

    handleLocationChange = direction => {
        const currentLocation = getLocation(this.state.currentLocationId);
        const newLocationId = currentLocation["locationTo" + direction];

        const newLocation = getLocation(newLocationId);
        

        if (newLocationId !== null && newLocation !== undefined) {
            const newMonster = this.setMonster(newLocation.residingMonster);
            this.setState({ currentLocationId: newLocationId, currentMonster: newMonster });
        } else {
            // Tell user they cannot go that way
        }
    };

    handleItemClick = (item, type) => {
        const player = this.state.player;

        switch (type) {
            case 'weapon':
                player.setMainHandWeapon(item);
                break;

            default:
                break;
        }

        this.setState({ player });
    };

    setMonster = monster => {
        console.log(monster);
        if (monster) {
            return new Monster(getMonster(monster._id));
        }

        return null;
    };

    handleBattleStrategy = strategy => {
        if (strategy === "Attack") {
            this.playerAttack();
        } else {
            const currentLocation = getLocation(this.state.currentLocationId);
            let newLocationId = null;

            if (currentLocation.locationToNorth !== null) newLocationId = currentLocation.locationToNorth;
            else if (currentLocation.locationToEast !== null) newLocationId = currentLocation.locationToEast;
            else if (currentLocation.locationToSouth !== null) newLocationId = currentLocation.locationToSouth;
            else if (currentLocation.locationToWest !== null) newLocationId = currentLocation.locationToWest;

            let newLocation = getLocation(newLocationId);
            let newMonster = newLocation.residingMonster;

            this.setState({ currentLocationId: newLocationId, currentMonster: newMonster });
        }
    };

    playerAttack = () => {
        console.log("Attack monster");
        let playerState = this.state.player;

        let playerAttack = playerState.calculateWeaponDamage(); // Testing

        let monster = this.state.currentMonster;
        monster.setCurrentHitPoints(monster.getCurrentHitPoints() - playerAttack);

        // Check if monster is dead
        if (monster.getCurrentHitPoints() <= 0) {
            console.log("You defeated the monster!");
            monster = null;
        } else {
            let monsterAttack = monster.getMaxDamage();
            let playerHealth = playerState.getCurrentHitPoints() - monsterAttack;
            playerState.setCurrentHitPoints(playerHealth);

            if (playerState.getCurrentHitPoints() <= 0) {
                console.log("You died");
            }
        }

        this.setState({ player: playerState, currentMonster: monster });
    };

    render() {
        const { currentLocationId, player, currentMonster } = this.state;

        return (
            <div className="gameWindow">
                <div className="grid-container">
                    <div className="row locationSection">
                        <div className="col-2">
                            <CharacterProfile character={player} />
                        </div>
                        <div className="col-3">
                            <CharacterLocation 
                                locationId={currentLocationId} 
                                monster={currentMonster} 
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-2">
                            <CharacterInventory 
                                character={player} 
                                onClick={this.handleItemClick}
                            />
                        </div>
                        <div className="col-2">
                            {
                                currentMonster === null ? <DirectionalPad onClick={this.handleLocationChange} /> : <BattlePad onClick={this.handleBattleStrategy} />
                            }

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Game;