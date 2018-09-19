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

    renderProfile() {
        console.log("Profile =============================>");
        console.log(`Current Hit Points: ${this.getCurrentHitPoints()}`);
        console.log("=====================================>");
    }
}

export default Organism;