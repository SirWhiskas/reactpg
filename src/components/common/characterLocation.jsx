import React, { Component } from 'react';
import { getLocation } from '../services/locationService.js';

class CharacterLocation extends Component {
    state = {  }

    getAvailableLocation = locationId => {
        if (locationId !== null) {
            return ( <b>{getLocation(locationId).name}</b>);
        }

    return (<i>None</i>);
    };

    render() {
        const currentLocation = getLocation(this.props.locationId);

        return ( 
            <div className="locationDesc">
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
         );
    }
}
 
export default CharacterLocation;