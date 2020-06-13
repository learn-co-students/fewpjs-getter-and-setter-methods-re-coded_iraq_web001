// Add your Circle class here
class Circle{
  constructor(radius){
    this.radius = radius;
    this.pi = Math.PI
  }
  
  get diameter(){
    return this.radius * 2
  }
  
  get circumference(){
   return this.pi * this.diameter
  }

  get area(){
   return this.pi * this.radius * this.radius
  }
  
  set diameter(newdia){
   this.radius = (newdia / 2)
  }
  
  set circumference(newcir){
    this.diameter = newcir/3.2
  }
  
  set area(rad){
    this.radius = rad
  }
  
}
let circle = new Circle(6)
 circle.diameter = 36
 circle.circumference = 100