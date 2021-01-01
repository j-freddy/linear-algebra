class Vector extends Matrix {
    constructor(values) {
        super([values]);
    }

    get x() { return this.getValues()[0]; }
    
    get y() { return this.getValues()[1]; }

    getValues() { return this.getColumn(0); }

    moveRight(unit) { this.add(new Vector([unit, 0])); }
    moveLeft(unit) { this.moveRight(-unit); }
    moveUp(unit) { this.add(new Vector([0, -unit])); }
    moveDown(unit) { this.moveUp(-unit); }

    print() {
        console.log(this.getValues());
    }

    //Pre: Both vectors have same dimensions
    static dotProduct(vectorOne, vectorTwo) {
        let columnOne = vectorOne.getValues(),
            columnTwo = vectorTwo.getValues();
        
        if(columnOne.length === columnTwo.length) {
            let sum = 0;

            for(let i = 0; i < columnOne.length; i++) {
                sum += columnOne[i] * columnTwo[i];
            }

            return sum;
        } else {
            console.log("Error: Trying to find dot product of 2 vectors with different dimensions");
            return;
        }
    }

    static zero() {
        return new Vector([0, 0]);
    }
}