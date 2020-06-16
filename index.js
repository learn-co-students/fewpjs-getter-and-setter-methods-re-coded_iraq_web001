// Add your Circle class here
class Circle {
  constructor(radius) {
    this.radius = radius
  }

get diameter() {
  return this.radius + this.radius
}

get area(){
  return this.radius * this.radius * Math.PI
}

get circumference(){
  return this.radius * 2 * Math.PI
}
set diameter(newDiameter){
  this.radius = newDiameter / 2
}
set area(newArea){
  this.radius = Math.sqrt(newArea/Math.PI)
}

set circumference(newCircumference){
  this.radius = newCircumference/2/Math.PI
}
}
let circle = new Circle(6);
circle.radius 
circle.area
circle.circumference