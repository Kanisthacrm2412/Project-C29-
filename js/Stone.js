class Stone{

    constructor(x,y,r){

        let options={

            restitution:0.8

        }

        this.body = Bodies.rectangle(x,y,w,h,options);
        this.r = r;
        World.add(world,this.body);


    }

    display(){

        var pos = this.body.position;

        push();
        translate(pos.x,pos.y);
        ellipseMode(CENTER);
        strokeWeight(1);
        fill("white");
        ellipse(0,0,this.r,this.r);
        noStroke();
        pop();

    }

}