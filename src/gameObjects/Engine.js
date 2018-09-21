import Game from '../components/game';
import Player from './Player.js';

class Engine {
    constructor(characterData) {
        super();

        this._player = new Player(10, 10, 0, 0, 1);

        this._player.setName(characterData.characterName);
        this._player.setRace(characterData.race);


    }
}

export default Engine;