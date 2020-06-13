// Add your Circle class here
class  Circle {
  constructor(radius) {
    this.radius = radius
  }
  get diameter(){
    return this.radius * 2
  }
 get  circumference(){
    return Math.PI * this.radius * 2
  }
  get area(){
    return Math.PI * this.radius**2  }
set diameter(newD){
  this.radius = this.radius * 3
}
set circumference(newC){
  this.radius = (this.radius-1)*3
}
}
