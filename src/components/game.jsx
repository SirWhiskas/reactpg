import React, { Component } from 'react';
import Player from '../gameObjects/Player.js';
import CharacterProfile from './common/characterProfile';

class Game extends Component {
    state = {
        player: ''
    };

    p1 = new Player(10, 10, 0, 0, 1);

    render() {
        let playerData = JSON.parse(this.props.match.params.characterData);
        this.p1.setName(playerData.characterName);
        this.p1.setRace(playerData.race);


        return (
            <div className="gameWindow">
                <div className="grid-container">
                    <div className="row">
                        <div className="col-3">
                            <CharacterProfile character={this.p1} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Game;