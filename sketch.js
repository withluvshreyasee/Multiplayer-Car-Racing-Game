var database;
var gamestate = 0;
var playercount = 0;
var game, player, form;
var allplayers;
var car1, car2, car3, car4;
var cars;

function setup(){
    database = firebase.database();
    createCanvas(displayWidth - 50,displayHeight - 50);
    game = new Game()
    game.getstate()
    game.start();
}

function draw(){
    background("white");

    if (playerCount == 4){
    game.update(1)
    }

    if (gamestate == 1){
        clear()
        game.play();
    }

    drawSprites();
}