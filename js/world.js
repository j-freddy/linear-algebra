class World {
    origin;
    scale = new Matrix([
        [10, 0],
        [0, -10]
    ]);

    constructor() {
        this.origin = new Vector([canvas.width/2, canvas.height/2]);
        this.testVector = new Vector([3, 5]);
    }

    drawLine(x1, y1, x2, y2) {
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
    }

    drawVector(vector, toScale = true) {
        let scaledVector = vector;
        if(toScale) scaledVector = Matrix.mult(this.scale, vector).castToVector();
        let translatedVector = Matrix.add(scaledVector, this.origin).castToVector();

        this.drawLine(this.origin.x, this.origin.y, translatedVector.x, translatedVector.y);
    }

    drawAxes() {
        //Draw x-axis
        this.drawLine(0, this.origin.y, canvas.width, this.origin.y);
        //Draw y-axis
        this.drawLine(this.origin.x, 0, this.origin.x, canvas.height);
    }

    draw() {
        this.drawAxes();
        this.drawVector(this.testVector);
        //window.requestAnimationFrame(_ => this.draw());
    }
}