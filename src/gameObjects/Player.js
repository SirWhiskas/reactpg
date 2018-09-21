import Organism from './Organism.js';

class Player extends Organism {
    constructor(currentHitPoints, maximumHitPoints, gold, xp, level, name, race) {
        super(currentHitPoints, maximumHitPoints, name, race);

        this.gold = gold;
        this.xp = xp;
        this.level = level;
    }

    addGold(goldAmnt) {
        this.gold += goldAmnt
    }

    getGold() {
        return this.gold;
    }

    addXP(xpAmnt) {
        this.xp += xpAmnt;
    }

    getXP() {
        return this.xp;
    }

    addLevel() {
        this.level++
    }

    getLevel() {
        return this.level;
    }

    getProfile() {
        return { "Name": this.getName(), "Race": this.getRace(), "Health": this.getCurrentHitPoints(), "Level": this.getLevel(), "Gold": this.getGold(), "XP": this.getXP() };
    }

    renderProfile() {
        let profile = `
            Profile ======================================>
            - Name: ${this.getName()}
            - Race: ${this.getRace()}
            - Level: ${this.getLevel()}
            - Current Hit Points: ${this.getCurrentHitPoints()}
            - Gold: ${this.getGold()}
            - XP: ${this.getXP()}
            ===============================================>
        `;
        console.log(profile);
        return profile;
    }
}

export default Player;