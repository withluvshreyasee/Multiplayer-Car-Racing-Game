class Game {
  constructor (){

  }
  getstate(){
  var gsRef
  gsRef = database.ref("gamestate");
  gsRef.on("value", function readData(data){
      gamestate = data.val();

  })
  }
  update(State){
      database.ref("/").update({
        gamestate : State
      })
  }

  async start(){
      if (gamestate == 0){
          form = new Form()
          form.display()

          player = new Player(); 
          var pcRef = await database.ref("playerCount").once("value");

          if(pcRef.exists()){
          playercount = pcRef.val()
          player.getCount();
          }
          car1 = createSprite(150, 400);
          car2 = createSprite(350, 400)
          car3 = createSprite(550, 400)
          car4 = createSprite(750, 400)

          cars = [car1, car2, car3, car4]
      }    
  }
  play(){
      form.hideForm();
      textSize(40);
      
text("START GAME", 200, 200);
      player.getPlayerinfo();

      var index = 0;
      var x = 0;
      var y;

      if (allplayers !== undefined){
          var displayPos = 150
          for (var p in allplayers) {
              
      index = player.index;
      x +=200;
      y = displayHeight - allplayers[p].distance;

      //  displayPos = displayPos + 25
      //textSize(20)
      //text(allplayers[p].name + ":" + allplayers[p].distance, 50, displayPos);

      cars[index - 1].x = x
      cars[index - 1].y = y
      if (index == player.index){
         cars[index - 1].shapeColor = "blue";
         camera.position.x = displayWidth/2;
         camera.position.y = cars[index - 1].y;
         }
        }    
      }
      if (keyDown(UP_ARROW)&& player.index !== null){
        player.distance = player.distance + 10;
        player.updateplayer();
      }    
      drawSprites();
  }
}