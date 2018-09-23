import React, { Component } from 'react';
import { getLocation } from '../services/locationService.js';

class CharacterLocation extends Component {
    state = {  }
    render() {
        const currentLocation = getLocation(this.props.locationId);
        
        return ( 
            <ul className="unStyled">
                <li>Location: {currentLocation.name}</li>
                <li> - {currentLocation.description}</li>
            </ul>
         );
    }
}
 
export default CharacterLocation;