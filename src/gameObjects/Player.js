import Organism from './Organism.js';

class Player extends Organism {
    constructor(currentHitPoints, maximumHitPoints, gold, xp, level) {
        super(currentHitPoints, maximumHitPoints);
    }
}

export default Player;