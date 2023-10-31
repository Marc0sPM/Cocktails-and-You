console.log("Hola");

class MainScene extends Phaser.Scene {

    constructor() {
      // Nombre de la escena para el SceneManager
      super({ key: 'MainScene' }); 
    }
  
    // Métodos init, preload, create, update
  
    preload(){

        this.load.image("player", "./assets/sprites/player.png");
        //load.image("player", ".\assets\sprites\player.png")
    }
    
    create(){
    
        this.player = this.add.image(100, 100, "player");
        this.player.setScale(2);
        this.player.flipX = true;
        this.player.setAngle(45);
        //this.player.setOrigin(0,1);
    
        //game.physics.startSystem(Phaser.Physics.ARCADE);
        //game.physics.arcade.enable(this.player);
    }
    update(time, delta){
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
}

var game = new Phaser.Game(config);