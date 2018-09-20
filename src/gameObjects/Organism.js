class Organism {
    constructor(currentHitPoints, maximumHitPoints) {
        this._currentHitPoints = currentHitPoints;
        this._maximumHitPoints = maximumHitPoints;
    }

    setCurrentHitPoints(value) {
        this._currentHitPoints = value;
    }

    getCurrentHitPoints() {
        return this._currentHitPoints;
    }

    setMaxiumHitPoints(value) {
        this._maximumHitPoints = value;
    }

    getMaximumHitPoints() {
        return this._maximumHitPoints;
    }

    setName(name) {
        this.name = name;
    }

    getName() {
        return this.name
    }

    setRace(race) {
        this.race = race;
    }

    getRace() {
        return this.race
    }

    getProfile() {
        return { "Name": this.getName(), "Race": this.getRace, "Health": this.getCurrentHitPoints() };
    }

    renderProfile() {
        let profile = `
            Profile ======================================>
            - Name: ${this.getName()}
            - Race: ${this.getRace()}
            - Current Hit Points: ${this.getCurrentHitPoints()}
            ===============================================>
        `;
        console.log(profile);
        return profile;
    }
}

export default Organism;