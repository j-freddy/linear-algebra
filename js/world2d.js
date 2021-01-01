class World2D {
    origin;
    scale = new Matrix([
        [100, 0],
        [0, -100]
    ]);
    vectors;

    //Test: Rotate 45 deg counter-clockwise then scale by factor of 2
    transformation = new Matrix([
        [1, -1],
        [1, 1]
    ]).scale(Math.sqrt(2));

    constructor() {
        this.origin = new Vector([canvas.width/2, canvas.height/2]);
        this.vectors = VECTORS2;
    }

    drawLine(x1, y1, x2, y2, colour = "#000", width = 1) {
        ctx.save();
        ctx.strokeStyle = colour;
        ctx.lineWidth = width;

        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();

        ctx.restore();
    }

    drawVector(vector, colour = "#000") {
        let scaledVector = vector;
        scaledVector = Matrix.mult(this.scale, vector).castToVector();
        let translatedVector = Matrix.add(scaledVector, this.origin).castToVector();

        this.drawLine(this.origin.x, this.origin.y, translatedVector.x, translatedVector.y, colour, 3);
    }

    drawAxes() {
        //Draw x-axis
        this.drawLine(0, this.origin.y, canvas.width, this.origin.y);
        //Draw y-axis
        this.drawLine(this.origin.x, 0, this.origin.x, canvas.height);
    }

    draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        this.drawAxes();
        this.vectors.forEach(vector => this.drawVector(vector, "#0000ff"));
        
        let transformedVectors = this.vectors.map(
            vector => Matrix.mult(this.transformation, vector).castToVector());

        transformedVectors.forEach(vector => this.drawVector(vector, "#ff0000"));
    }

    tick(mouse) {
        if(mouse.isDown) {
            //this.origin.add(mouse.deltaPos);
        }

        this.draw();

        window.requestAnimationFrame(_ => this.tick(mouse));
    }
}