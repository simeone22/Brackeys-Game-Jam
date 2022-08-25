class Player {
    constructor(name = 'Player', healthPoints = 100) {
        this.name = name;
        this.healthPoints = healthPoints;
    }

    getName() {
        return this.name;
    }

    getHealthPoints() {
        return this.healthPoints;
    }

    setDamage(damage) {
        this.healthPoints -= damage;
    }
}