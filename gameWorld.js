// Object that contains all physical objects of the game, updates them in each animation frame

function GameWorld() {

    this.stick = new Stick();
}

GameWorld.prototype.update = function() {

    this.stick.update();
}

GameWorld.prototype.draw = function() {
    
    Canvas.drawImage(sprites.background, {x: 0, y: 0});

    this.stick.draw();

}