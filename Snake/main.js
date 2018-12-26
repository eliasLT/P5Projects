var canvas ;
var main = document.querySelector(".main")
var canvasWidth  = main.clientWidth  * 0.8 - 10;
var canvasHeight = main.clientHeight * 0.7 - 10;

var game;

console.log('bonjour de la part de elias LTF1')


function setup(){
    console.log(width)
    canvas = createCanvas(canvasWidth, canvasHeight);
    canvas.parent("game");
    // recadrer();
    background(255);
    var terrain = new Terrain(canvasWidth, canvasHeight);
    var serp    = new Snake();
    var pomme   = new Pomme(7, 7);


    game = new Game(terrain, serp, pomme);
    frameRate(15)

}

function keyPressed(){
    if( keyCode === LEFT_ARROW){
        game.setDirection("L")
    }
    if( keyCode === RIGHT_ARROW){
        game.setDirection("R")
        console.log("R")
    }
    if( keyCode === UP_ARROW){
        game.setDirection("T")
        console.log("T")
    }
    if( keyCode === DOWN_ARROW){
        game.setDirection("B")
        console.log("B")
    }
}

function draw(){
    background(255);
    game.draw();
    game.step();
}