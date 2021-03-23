// Add your Circle class here
class Circle {
    constructor (radius){
        this.radius = radius
    }
    get diameter() {
        return (2*this.radius);
    }
    // set area(newArea) {
    //     this.sideLength = Math.sqrt(newArea);
    //   }
    set diameter(newDiameter) {
        this.radius = (newDiameter/2);
    }
    get circumference() {
        return (this.radius * 2) * Math.PI
    }

    set circumference(newCircumference) {
        this.radius = (newCircumference/(2*Math.PI));
    }

    get area() {
        return (this.radius * this.radius) * Math.PI
    }

    set area(radius) {
        this.radius = radius;
    }
    
}