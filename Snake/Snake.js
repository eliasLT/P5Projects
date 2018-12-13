const LEFT     = "L";
const RIGHT    = "R";
const TOP      = "T";
const BOTTOM   = "B";


function Snake(){
    this.length    = 4;
    this.direction = RIGHT;
    this.corps     = [
        {x : 2, y : 4},
        {x : 2, y : 5},
        {x : 2, y : 6},
        {x : 2, y : 7},
    ]




    this.move = function(){
        var temp = [];
        for( var i = 1 ; i < this.length ; i++){
            temp.push(this.corps[i]);
        }
        var xMove = 0;
        var yMove = 0;
        if(this.direction === LEFT ){
            xMove = -1;
            yMove = 0;
        }
        if(this.direction === RIGHT ){
            xMove = 1;
            yMove = 0;
        }
        if(this.direction === TOP ){
            xMove = 0;
            yMove = -1;
        }
        if(this.direction === BOTTOM ){
            xMove = 0;
            yMove = 1;
        }
        
        var t = {x : this.corps[this.length-1].x+ xMove, y : this.corps[this.length-1].y+ yMove}
        temp.push(t);

        this.corps = temp;
    }
    this.manger = function(){

    }
}