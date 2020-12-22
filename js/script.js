const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

function main() {
    const world = new World();
    world.draw();
}

window.onload = () => {
    console.log("Hello world!");
    console.log("To-do:");
    console.log("Have an array of vectors in the world");
    console.log("Have a transformation matrix");
    console.log("Draw the vectors and the transformed vectors in a different colour");
    main();
}