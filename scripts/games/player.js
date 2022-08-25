class Player {
    constructor(x, y, w, h, name = 'Player', healthPoints = 100, props = []) {
        this.name = name;
        this.healthPoints = healthPoints;
        this.props = props;

        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;

        this.speed = 6;
        this.acc = 0.1;

        this.controls = new controls();
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

    update(){
        this.#movimento();
    }

    #movimento(){
        if(this.controls.down) this.y += this.speed;
        if(this.controls.up) this.y -= this.speed;
        if(this.controls.left) this.x -= this.speed;
        if(this.controls.right) this.x += this.speed;
    }

    draw(ctx){
        ctx.save();

        ctx.translate(this.x, this.y);  
        ctx.beginPath();
        ctx.rect(-this.w/2, -this.h/2, this.w, this.h);

        ctx.fillStyle = '#000000';
        ctx.fill();

        ctx.restore();
    }
}