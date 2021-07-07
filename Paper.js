class Paper {
    constructor(x, y, radius, angle) {
        var options = {
            isStatic:false,
            restitution:0.1,
            friction:0,
            density:1.2
        }
        this.radius = radius
        this.body = Bodies.circle(x, y, (this.radius-20)/2, options)
        World.add(world, this.body)
        this.image = loadImage("paper.png")
    }
        display(){
            var angle = this.body.angle;
            push();
            translate(this.body.position.x, this.body.position.y);
            rotate(angle);
            imageMode(RADIUS);
            image(this.image, 0, 0, this.radius, this.radius);
            pop();
        
        
    }
} 
