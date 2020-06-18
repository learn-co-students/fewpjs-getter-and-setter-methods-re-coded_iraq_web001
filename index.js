class Circle {
  constructor(radius){
    this.radius = radius;
  }
  
  get PI(){
    return Math.PI;
  }
  
  get diameter(){
    return this.radius * 2;
  }
  
  get circumference(){
    return this.PI * this.diameter;
  }
  
  get area(){
    return this.PI * (this.radius ** 2);
  }
  
  set diameter(diameter){
    this.radius = diameter/2;
  }
  
  set circumference(circumference){
    this.radius = circumference/(2*this.PI);
  }
  
  set area(area){
    this.radius = Math.sqrt(area/this.PI);
  }
}