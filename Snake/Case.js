function Case(x, y, width, height){
    this.x = x;
    this.y = y;
    this.height = height;
    this.width  = width;
    this.hasSerpent = false;
    this.setSerpent = function(bool){
        this.hasSerpent = bool;
    }


    this.draw = function(){
        if(this.hasSerpent){
            var xx = this.x * this.width;
            var yy = this.y * this.height;
            fill(255, 0, 0)
            noStroke();
            // console.log(xx)
            rect(xx, yy, width, height);
        }
    }

}