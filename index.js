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
  
  set circumference(newcir){
    this.diameter = newcir/3.2
  }
  
  get area(){
   return this.pi * this.radius * this.radius
  }
  
  set diameter(createRad){
   this.radius = (createRad / 2)
  }
  
  
  set area(radius){
    this.radius = radius
  }
  
}