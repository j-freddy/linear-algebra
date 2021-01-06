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

    //Pre: 2x2 matrix
    getDeterminant() {
        if(this.getNoRows() == 2 && this.getNoColumns() == 2) {
            return this.columns[0][0] * this.columns[1][1] - this.columns[0][1] * this.columns[1][0];
        } else {
            console.log("Error: Trying to get determinant of a non 2x2 matrix");
        }
    }

    //Pre: 2x2 matrix
    getLinearScale() {
        if(this.getNoRows() == 2 && this.getNoColumns() == 2) {
            return Math.sqrt(Math.abs(this.getDeterminant()));
        } else {
            console.log("Error: Trying to get lienar scale of a non 2x2 matrix");
        }
    }

    cloneColumn(j) {
        return this.getColumn(j).map(x => x);
    }

    clone() {
        let matrix = [];

        for(let j = 0; j < this.getNoColumns(); j++) {
            matrix.push(this.cloneColumn(j));
        }

        return new Matrix(matrix);
    }

    scale(factor) {
        for(let i = 0; i < this.getNoColumns(); i++) {
            this.columns[i] = this.columns[i].map(x => x * factor);
        }

        return this;
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

    //Pre: No. of columns = 1
    castToVector() {
        if(this.getNoColumns() === 1) {
            return new Vector(this.getColumn(0));
        } else {
            console.log("Error: Trying to convert matrix to vector"
                + "but the matrix doesn't have 1 column");
        }
    }

    print() {
        let matrix = [];

        for(let i = 0; i < this.getNoRows(); i++) {
            matrix.push(this.getRow(i));
        }

        console.log(matrix);
    }

    //Pre: Both matrices have same dimensions
    /*
        Difference between Matrix.add([matrixOne], [matrixTwo]) and [matrix].add([matrixTwo]) is:
        The static method returns a new matrix.
        The non-static method modifies the original matrix.
    */
    static add(matrixOne, matrixTwo) {
        let clone = matrixOne.clone();
        clone.add(matrixTwo);

        return clone;
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