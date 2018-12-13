function Terrain(width, height){
    this.x      = 50;
    this.y      = 30;
    this.width  = width  / this.x;
    this.height = height / this.y;
 
    this.cases = [];
    for(var i = 0; i < this.x; i++){
        this.cases.push([]);
        for(var j = 0; j < this.y; j++){
            this.cases[i][j] = new Case(i, j, this.width, this.height);
        }
    }


    this.draw = function(){
        for(var i = 0; i < this.x; i++){
            for(var j = 0; j < this.y; j++){
                this.cases[i][j].draw();
            }
        }
    }
}