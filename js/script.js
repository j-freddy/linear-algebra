const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

function main() {
    const matrixOne = new Matrix([
        [1, 4],
        [2, 5],
        [3, 6]
    ]);

    const matrixTwo = new Matrix([
        [3, 8, 5],
        [5, 2, 4]
    ]);

    const matrixThree = Matrix.mult(matrixOne, matrixTwo);
    
    matrixThree.print();
}

window.onload = () => {
    console.log("Hello world!");
    main();
}