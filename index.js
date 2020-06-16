// Add your Circle class here
class Circle{
  constructor(radius){
    this.radius=radius;
  }
  get diameter(){
    return this.radius*2;
  }
  
  get circumference(){
    return 2 * Math.PI * this.radius;
  }
  get area(){
    return (this.radius **2) * Math.PI;
  }
  
  set diameter(radius){
    
    this.radius= radius / 2;
  }
  
  set circumference(radius){
    
    this.radius=(radius /2) / Math.PI;
  }
  set area(radius){
    
    this.radius =Math.sqrt(radius) / Math.PI;
  }
}