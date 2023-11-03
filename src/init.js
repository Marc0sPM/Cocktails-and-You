//import Player from "./Player.js";

let player;
let background;

class MainScene extends Phaser.Scene {
    constructor() {
      // Nombre de la escena para el SceneManager
      super({ key: 'MainScene' }); 
    }
  
    // Métodos init, preload, create, update
  
    preload(){
      console.log("Soy preload");
      this.load.image("background", "..\\assets\\sprites\\FondoTemporal.jpg");
      this.load.spritesheet('player',
                     '..\\assets\\sprites\\Player\\sprites-walk.png',
                      { frameWidth: 384/8, frameHeight: 48 });

      this.load.spritesheet('player_stay', 
                      '..\\assets\\sprites\\Player\\sprites-idle.png',
                       {frameWidth: 192/4, frameHeight: 48});
    }
    
    create(){
      console.log("Soy create");
      background = this.add.image(0,0, "background")
      background.setOrigin(0, 0); // Ajusta el origen de la imagen a la esquina superior izquierda
      background.setScale(800 / background.width, 600 / background.height); // Ajusta la escala para que llene la pantalla

      
      // player = new Player(this, 100, 100, "player");   //Constructora del player (HAY QUE VERLO)
      player = this.add.sprite(100,100, "player");
      player.setScale(2);


         this.anims.create({
          key: "walk",
          frames: this.anims.generateFrameNumbers("player", { start: 0, end: 7 }), // Cambia estos números según tus frames
           frameRate: 15, // Velocidad de la animación
           repeat: -1 // -1 para bucle infinito
          
          
        });
        this.anims.create({
          key:"stay",
          frames: this.anims.generateFrameNumbers("player_stay", {start: 0, end: 3}),
          frameRate: 7,
          repeat: -1,
        });
        
      
    }
    update(time, delta){
      const cursors = this.input.keyboard.createCursorKeys();
      const noInput = !cursors.up.isDown && !cursors.down.isDown && !cursors.left.isDown && !cursors.right.isDown;
      // Mover hacia arriba
  if (cursors.up.isDown) {
    player.y -= 3;
  }
  // Mover hacia abajo
  else if (cursors.down.isDown) {
    player.y += 3;
  }

  // Mover hacia la izquierda
  if (cursors.left.isDown) {
    player.setScale(-2,2);
    player.x -= 3;
  }
  // Mover hacia la derecha
  else if (cursors.right.isDown) {
    player.setScale(2,2);
    player.x += 3;
  }
  if(noInput){
    player.anims.play("stay", true);
  }
  else {
    player.anims.play("walk", true);
   }
    }

  }

  const config = {
    width: 800,
    height: 600,
    parent: "container",
    type: Phaser.AUTO,
    scene: MainScene
}

var game = new Phaser.Game(config);