import Organism from './Organism.js';

class Monster extends Organism {
    constructor({ health, maxDamage, rewardGold, rewardXP, name, rewardItems }) {
        super(health, health, name, null);

        this.maxDamage = maxDamage;
        this.rewardGold = rewardGold;
        this.rewardXP = rewardXP;
        this.rewardItems = [rewardItems];
    }

    setMaxDamage(damage) {
        this.maxDamage = damage;
    }

    getMaxDamage() {
        return this.maxDamage;
    }

    setRewardGold(gold) {
        this.rewardGold = gold;
    }

    getRewardGold() {
        return this.rewardGold;
    }

    setRewardXP(xp) {
        this.rewardXP = xp;
    }

    getRewardXP() {
        return this.rewardXP;
    }

    setRewardItems(items) {
        this.rewardItems = items;
    }

    getRewardItems() {
        return this.rewardItems;
    }
}

export default Monster;