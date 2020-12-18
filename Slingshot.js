class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.sling1 = loadImage("sprites/sling1.png")
        this.sling2 = loadImage("sprites/sling2.png")
        this.sling3 = loadImage("sprites/sling3.png")
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        image(this.sling1,200,23)
        image(this.sling2,170,20)
        if(this.sling.bodyA){
            push()
            var posA= this.sling.bodyA.position;
            var posB = this.pointB;
            strokeWeight(12);
            stroke(48,23,8)
            if (posA.x < 220){
                line(posA.x-30, posA.y, posB.x-10, posB.y);
                line(posA.x-30, posA.y, posB.x+25, posB.y);
                image(this.sling3,posA.x-40,posA.y-12,15,30)
            }   
            else{
                line(posA.x+30, posA.y, posB.x-10, posB.y);
                line(posA.x+30, posA.y, posB.x+25, posB.y-3);
                image(this.sling3,posA.x+25,posA.y-10,15,30)

            }
            pop()
        }
    }
    
}