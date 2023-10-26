const config = {
    width: 800,
    height: 600,
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

    //this.load.image("player", "./assets/sprites/player.png");
    this.load.image("player", ".\assets\sprites\player.png")
}

function create(){

    this.player = this.add.image(100, 100, "player");
    this.player.setScale(2);
    this.player.flipX = true;
    this.player.setAngle(45);
    this.player.setOrigin(0,1);
}
function update(time, delta){
    this.player.angle++;
    this.player.x++;
}