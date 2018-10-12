import React, { Component } from 'react';
import Player from '../gameObjects/Player.js';
import CharacterProfile from './common/characterProfile';
import CharacterLocation from './common/characterLocation';
import DirectionalPad from './directionalPad';
import BattlePad from './battlePad';
import QuestLog from './questLog';

import { getLocations, getLocation } from './services/locationService.js';
import { getMonster } from './services/monsterService.js';

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

        const locations = getLocations();

        // Initial current location to first in list
        const currentLocationId = locations[0]._id;

        const currentMonster = locations[0].residingMonster;

        this.setState({ player, locations, currentLocationId, currentMonster });
    }

    handleLocationChange = direction => {
        const currentLocation = getLocation(this.state.currentLocationId);
        const newLocationId = currentLocation["locationTo" + direction];

        const newLocation = getLocation(newLocationId);
        const newMonster = newLocation.residingMonster;
        console.log(newMonster);

        if (newLocationId !== null) {
            this.setState({ currentLocationId: newLocationId, currentMonster: newMonster });
        } else {
            // Tell user they cannot go that way
        }
    };

    handleBattleStrategy = strategy => {
        if (strategy === "Attack") {
            console.log("Attack monster");
            let playerAttack = 1; // Testing
            let monster = getMonster(this.state.currentMonster._id);
            let monsterHealth = monster.health;
            let monsterAttack = monster.maxDamage;


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
                            <CharacterLocation locationId={currentLocationId} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-2">
                            <QuestLog />
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