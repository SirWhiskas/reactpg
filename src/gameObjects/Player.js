import Organism from './Organism.js';
import { getItem } from '../components/services/itemService.js';
import { getRace } from '../components/services/characterRaceService.js';
import { getWeaponByItemId } from '../components/services/weaponService.js';

class Player extends Organism {
    constructor(currentHitPoints, maximumHitPoints, gold, xp, level, name, race) {
        super(currentHitPoints, maximumHitPoints, name, race);

        this.gold = gold;
        this.xp = xp;
        this.level = level;

        this.mainHandWeapon = null;
        this.offHandItem = null;
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
        let mainHandWeapon = (this.mainHandWeapon !== null ? getItem(this.getMainHandWeapon()).nameSingular : "");

        return { "Name": this.getName(), "Race": getRace(this.getRace()).name, "Health": this.getCurrentHitPoints(), "Level": this.getLevel(), "Gold": this.getGold(), "XP": this.getXP(), "Main Weapon": mainHandWeapon };
    }

    setMainHandWeapon(itemId) {
        this.mainHandWeapon = itemId;
    }

    getMainHandWeapon() {
        return this.mainHandWeapon;
    }

    setOffHandItem(itemId) {
        this.offHandItem = itemId;
    }

    getOffHandItem() {
        return this.offHandItem;
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

    calculateWeaponDamage() {
        let damage = 1 // Bare hands

        if (this.getMainHandWeapon() !== null) {
            let weapon = getWeaponByItemId(this.getMainHandWeapon());
            let max = weapon.maxDamage;
            let min = weapon.maxDamage;

            damage = Math.floor(Math.random() * (max - min + 1) ) + min;
        }

        return damage;
    }
}

export default Player;