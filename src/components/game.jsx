import React, { Component } from 'react';
import Player from '../gameObjects/Player.js';
import CharacterProfile from './common/characterProfile';
import CharacterLocation from './common/characterLocation';

import { getLocations } from './services/locationService.js';

class Game extends Component {
    state = {
        player: '',
        locations: [],
        currentLocationId: ''
    };

    componentWillMount() {
        const playerData = JSON.parse(this.props.match.params.characterData);
        const player = new Player(10, 10, 0, 0, 1, playerData.characterName, playerData.race);

        const locations = getLocations();

        // Initial current location to first in list
        const currentLocationId = locations[0]._id;

        this.setState({ player, locations, currentLocationId });
    }

    render() {
        return (
            <div className="gameWindow">
                <div className="grid-container">
                    <div className="row">
                        <div className="col-2">
                            <CharacterProfile character={this.state.player} />
                        </div>
                        <div className="col-3">
                            <CharacterLocation locationId={this.state.currentLocationId} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Game;