const config = {
    width: 1980,
    height: 1080,
    parent: "container",
    type: Phaser.AUTO,
    scene: {
        preload: preload,
        create: create,
        update: update
    }
}

var game = new Phaser.Game(config);

function preload(){
    console.log("Esto es el preload");
}

function create(){
    console.log("Esto es el create");
}
function update(time, delta){
    console.log(delta);
}