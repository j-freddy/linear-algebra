class Mouse {
    #isDown;
    #x = 0;
    #y = 0;
    #deltaPos; //Change between current frame and previous frame
    #isMoving;

    constructor() {
        this.#isDown = false;
        this.#deltaPos = Vector.zero();
        this.#isMoving = false;
        this.handler();
        this.tick();
    }

    get isDown() { return this.#isDown; }

    get deltaPos() { return this.#deltaPos; }

    tick() {
        if(!this.#isMoving) {
            this.#deltaPos = Vector.zero();
        }

        this.#isMoving = false;

        window.requestAnimationFrame(_ => this.tick());
    }

    handler() {
        canvas.onmousedown = _ => {
            this.#isDown = true;
        }

        window.onmouseup = _ => {
            this.#isDown = false;
        }

        window.onmousemove = (e) => {
            this.#isMoving = true;
            this.#deltaPos = new Vector([e.clientX - this.#x, e.clientY - this.#y]);

            if(this.#isDown) world.origin.add(this.#deltaPos);

            this.#x = e.clientX;
            this.#y = e.clientY;
        }
    }
}