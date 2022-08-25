const { v4: uuidv4 } = require('uuid');

class Prop {
    constructor(id = uuidv4(), name) {
        this.id = id;
        this.name = name;
    }

    getId() {
        return this.id;
    }

    getName() {
        return this.name;
    }
}