class Player {
    constructor(name = 'Player', healthPoints = 100, props = []) {
        this.name = name;
        this.healthPoints = healthPoints;
        this.props = props;
    }

    getName() {
        return this.name;
    }

    getHealthPoints() {
        return this.healthPoints;
    }

    getProps() {
        return this.props;
    }

    addProp(prop) {
        this.props.push(prop);
    }

    setDamage(damage) {
        this.healthPoints -= damage;
    }
}