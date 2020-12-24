const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

function main() {
    const world = new World();
    world.draw();
}

window.onload = () => {
    console.log("Hello world!");
    console.log("To-do:");
    console.log("Tidy up the World class so it's easier to test stuff");
    console.log("Try 3D");
    console.log("Note: I could create 2 classes: 'World2D' and 'World3D'.");
    console.log("Or, I could create 'World2D' as a subclass of 'World3D' with the z-index = 0 always.");
    main();
}