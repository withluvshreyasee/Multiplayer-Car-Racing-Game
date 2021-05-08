class Form {
  constructor (){
    this.input = createInput("name")
    this.button = createButton("Enter")
    this.greeting = createElement("h3")
  }
  display(){
  var title = createElement("h2")
  title.html("CAR RACING REGISTRATION FORM")
  title.position(displayWidth/2 - 80, 10); 
  this.input.position(displayWidth/2 + 80, displayHeight/2); 
  this.button.position(displayWidth/2 + 150, displayHeight/2 + 30);  
  this.button.mousePressed(
  ()=> {
  this.input.hide()
  this.button.hide()

  player.name = this.input.value();
  playercount +=1;
  player.index = playercount;
  player.update(playercount);
  player.updatePlayer();

  this.greeting.html("Hello " +this.input.value())
  this.greeting.position(displayWidth/2 + 150, displayHeight/2 + 30)
    }) 
  }

  hideForm(){
  this.input.hide();
  this.button.hide();
  this.greeting.hide();
  }
}