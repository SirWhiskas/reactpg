class Organism {
    constructor(currentHitPoints, maximumHitPoints, name, race) {
        this._currentHitPoints = currentHitPoints;
        this._maximumHitPoints = maximumHitPoints;
        this._name = name;
        this._race = race;
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
        this._name = name;
    }

    getName() {
        return this._name
    }

    setRace(race) {
        this._race = race;
    }

    getRace() {
        return this._race
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