import React, { Component } from 'react';
import { getLocation } from '../services/locationService.js';
import { getMonster } from '../services/monsterService.js';

class CharacterLocation extends Component {
    state = {}

    getAvailableLocation = locationId => {
        if (locationId !== null) {
            return (<b>{getLocation(locationId).name}</b>);
        }

        return (<i>None</i>);
    };

    render() {
        const currentLocation = getLocation(this.props.locationId);
        let monsterName = "None";
        let monsterHP = "";
        if (currentLocation.residingMonster !== null) {
            let monster = getMonster(currentLocation.residingMonster._id);
            console.log(monster);
            monsterName = <b>{monster.name}</b>
            monsterHP = <b>{monster.health}</b>
        }

        return (
            <div className="locationDesc grid-container">
                <div className="row">
                    <div className="col-3">
                        <ul className="unStyled">
                            <li>Location: {currentLocation.name}</li>
                            <li> - {currentLocation.description}</li>
                            <li> - Available directions:
                                <ul>
                                    <li>North: {this.getAvailableLocation(currentLocation.locationToNorth)}</li>
                                    <li>East: {this.getAvailableLocation(currentLocation.locationToEast)}</li>
                                    <li>West: {this.getAvailableLocation(currentLocation.locationToWest)}</li>
                                    <li>South: {this.getAvailableLocation(currentLocation.locationToSouth)}</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div className="col-2">
                        <ul className="unStyled">
                            <li>Monster: {monsterName}</li>
                            <li>-HP: {monsterHP}</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default CharacterLocation;