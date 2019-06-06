import {MovableObject} from "./GameObjects";

export class Player extends MovableObject {
    constructor(id, x, y, height, width, images, speed, direction) {
        super(x, y, height, width, images["0l.png"], speed);
        this.id = id;
        this.images = images;
        this.direction = direction;
        this.tmp = 10;
    }

    move() {
        this.speed[0] *= this.direction;
        super.move();
        this.speed[0] *= this.direction;
    }

    jump() {

    }

    hit() {

    }

    shoot() {

    }

    render(ctx) {
        if (this.direction === -1 && this.speed[0]) {
            this.image = this.images["l" + Math.floor(this.tmp / 10).toString() + ".png"];
            this.tmp = (this.tmp + 1) % 60 + 10;
        } else if (this.direction === 1 && this.speed[0]) {
            this.image = this.images["r" + Math.floor(this.tmp / 10).toString() + ".png"];
            this.tmp = (this.tmp + 1) % 60 + 10;
        }
        super.render(ctx);
    }
}

export class Bullet extends MovableObject {
    move() {
        this.x += this.speed[0];
    }

    onCollision(other) {
        // super.onCollision(other);
    }
}