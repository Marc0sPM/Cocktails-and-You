/*function mostrarOcultar(parrafoId) {
    var parrafos = document.querySelectorAll('.contenido');
    parrafos.forEach(function(parrafo) {
        if(parrafo.id === parrafoId) parrafo.style.display = "block";
        else parrafo.style.display = "none";
    });
}*/

class MainScene extends Phaser.Scene {
    constructor() {
        super({ key: 'MainScene' });
    }

    preload() {
        this.load.image("player", "./assets/sprites/player.png");
    }

    create() {
        this.player = this.add.image(100, 100, "player");
        this.player.setScale(2);
        this.player.flipX = true;
        this.player.setAngle(45);
    }

    update(time, delta) {
        this.player.angle++;
        this.player.x++;
    }
}

const config = {
    width: 800,
    height: 600,
    canvas: "container",
    type: Phaser.CANVAS,
    scene: MainScene
};

var game = new Phaser.Game(config);
