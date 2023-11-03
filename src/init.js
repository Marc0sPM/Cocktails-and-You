

class MainScene extends Phaser.Scene {

    constructor() {
      // Nombre de la escena para el SceneManager
      super({ key: 'MainScene' }); 
    }
  
    // Métodos init, preload, create, update
  
    preload(){
      console.log("Soy preload");
        
    }
    
    create(){
      console.log("Soy create");
        
    }
    update(time, delta){

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