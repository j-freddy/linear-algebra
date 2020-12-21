class Vector extends Matrix {
    constructor(values) {
        super([values]);
    }

    getValues() { return this.getColumn(0); }

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
}