function Game(terrain, snake, pomme){
    this.terrain = terrain;
    this.snake   = snake;
    this.pomme   = pomme;
    for(var i = 0; i < this.snake.length; i++){
        var xx = this.snake.corps[i].x;
        var yy = this.snake.corps[i].y;
        this.terrain.cases[xx][yy].setSerpent(true);
    }

    this.step = function(){
        var xx = this.snake.corps[0].x;
        var yy = this.snake.corps[0].y;
        this.terrain.cases[xx][yy].setSerpent(false);
        
        this.snake.move();
        
        xx = this.snake.corps[this.snake.length - 1].x;
        yy = this.snake.corps[this.snake.length - 1].y;
        this.terrain.cases[xx][yy].setSerpent(true);
    }

    this.draw = function(){
        this.terrain.draw();
    }

    this.setDirection = function (direction){
        this.snake.direction = direction;
    }

}