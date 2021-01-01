const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

const world = new World2D();

function main() {
    const mouse = new Mouse();
    //const world = new World2D();
    world.tick(mouse);
}

window.onload = () => {
    console.log("Hello world!");
    console.log("Bugs:");
    console.log("Scrolling is about 1/2 correct speed.");
    console.log("This is because window.onmousemove is called roughly 120 times a second while tick is 60 frames");
    console.log("Temp fix: world is now a global variable. Scrolling is handeled in mouse class.");
    console.log("To-do:");
    console.log("Try 3D");
    console.log("Note: I could create 2 classes: 'World2D' and 'World3D'.");
    console.log("Or, I could create 'World2D' as a subclass of 'World3D' with the z-index = 0 always.");
    main();
}