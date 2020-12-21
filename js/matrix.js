/*
    Let's represent a matrix as a list of columns
    So a vector is a matrix with a list of size 1
*/

class Matrix {
    columns;

    constructor(columns) {
        this.columns = columns;
    }

    getNoRows() { return this.columns[0].length; }

    getNoColumns() { return this.columns.length; }

    getRow(i) {
        let row = [];

        this.columns.forEach(column => {
            row.push(column[i]);
        });

        return row;
    }

    getColumn(j) { return this.columns[j]; }

    //This returns a deep copy
    //i.e editing the matrix returned from this method will not affect the original matrix
    getRows() {
        let matrix = [];

        for(let i = 0; i < this.getNoRows(); i++) {
            matrix.push(this.getRow(i));
        }

        return matrix;
    }

    scale(factor) {
        for(let i = 0; i < this.getNoColumns(); i++) {
            this.columns[i] = this.columns[i].map(x => x * factor);
        }
    }

    //Pre: Both matrices have same dimensions
    add(matrix) {
        if(this.getNoRows() === matrix.getNoRows() && this.getNoColumns() === matrix.getNoColumns()) {
            for(let i = 0; i < this.getNoRows(); i++) {
                for(let j = 0; j < this.getNoColumns(); j++) {
                    /*
                        jth column
                        ith row
                    */
                   this.columns[j][i] += matrix.columns[j][i];
                }
            }
        } else {
            console.log("Error: Trying to add 2 matrices with different dimensions");
            //Matrix remains unchanged
        }
    }

    print() {
        let matrix = [];

        for(let i = 0; i < this.getNoRows(); i++) {
            matrix.push(this.getRow(i));
        }

        console.log(matrix);
    }

    //Pre: No of columns in 1st matrix = No of rows in 2nd matrix
    static mult(matrixOne, matrixTwo) {
        if(matrixOne.getNoColumns() === matrixTwo.getNoRows()) {
            let newColumns = [];

            matrixTwo.columns.forEach(column => {
                newColumns.push(
                    matrixOne.getRows().map(
                        row => Vector.dotProduct(new Vector(row), new Vector(column))
                    )
                );
            });

            return new Matrix(newColumns);
        } else {
            console.log("Error: Trying to multiply 2 matrices but"
                + "no of columns in 1st matrix is not equal to no of rows in 2nd matrix");
        }
    }
}