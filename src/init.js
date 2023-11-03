
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
      this.load.image("player", "..\\assets\\sprites\\PersonajeMovPrueba.png");
    }
    
    create(){
      console.log("Soy create");
      background = this.add.image(0,0, "background")
      background.setOrigin(0, 0); // Ajusta el origen de la imagen a la esquina superior izquierda
      background.setScale(800 / background.width, 600 / background.height); // Ajusta la escala para que llene la pantalla
        player = this.add.image(100,100, "player");

        player.setScale(0.1);

        // this.anims.create({
        //   key: "walk",
        //   frames: this.anims.generateFrameNumbers("player", { start: 0, end: 1 }), // Cambia estos números según tus frames
        //   frameRate: 10, // Velocidad de la animación
        //   repeat: -1 // -1 para bucle infinito
        // });
        
        // // Inicia la animación
        // player.play("walk");
    }
    update(time, delta){
      const cursors = this.input.keyboard.createCursorKeys();

      // Mover hacia arriba
  if (cursors.up.isDown) {
    player.y -= 5;
  }
  // Mover hacia abajo
  else if (cursors.down.isDown) {
    player.y += 5;
  }

  // Mover hacia la izquierda
  if (cursors.left.isDown) {
    player.x -= 5;
  }
  // Mover hacia la derecha
  else if (cursors.right.isDown) {
    player.x += 5;
  }
  // if (!cursors.up.isDown && !cursors.down.isDown && !cursors.left.isDown && !cursors.right.isDown) {
  //   player.anims.stop();
  // } else {
  //   player.anims.play("walk", true);
  // }
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