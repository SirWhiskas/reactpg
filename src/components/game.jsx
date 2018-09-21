import React, { Component } from 'react';
import Player from '../gameObjects/Player.js';
import CharacterProfile from './common/characterProfile';

class Game extends Component {
    state = {
        player: '',
        locations: []
    };

    componentWillMount() {
        const playerData = JSON.parse(this.props.match.params.characterData);
        const player = new Player(10, 10, 0, 0, 1, playerData.characterName, playerData.race);

        this.setState({ player });
    }

    render() {
        return (
            <div className="gameWindow">
                <div className="grid-container">
                    <div className="row">
                        <div className="col-2">
                            {<CharacterProfile character={this.state.player} />}
                        </div>
                        <div className="col-3">
                            <h1>Game Window</h1>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Game;