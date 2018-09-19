import React, { Component } from 'react';
import Player from '../gameObjects/Player.js';

class Game extends Component {
    state = {};

    p1 = new Player(10, 10, 0, 0, 1);

    render() {
        console.log(this.props);
        return (
            <div>
                {this.p1.renderProfile()}
            </div>
        );
    }
}

export default Game;