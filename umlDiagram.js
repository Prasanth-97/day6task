class circle {
   constructor(radius, color) {
      this.radius = radius;
      this.color = color;
   };

   circle() {
      return (`The radius of the circle is ${this.radius}`);
   }
   getradius() {
      console.log(`The radius of the circle is ${this.radius}`);
   }
   setRadius(radi) {
      this.radius = radi;
   }
   getColour() {
      return (`Colour of the circle is ${this.color}`)
   }
   setColor(color1) {
      this.color = color1;
   }
   getarea() {
      let area = (Math.PI * (this.radius * this.radius));
      return area;
   }
   getcircumference() {
      let circumference = 2 * Math.PI * this.radius;
      return circumference;
   }

}
let circle1 = new circle (3.0,"yellow");
circle1.setRadius(6.0);
circle1.setColor("blue");

console.log(circle1.getarea());
console.log(circle1.getcircumference());
console.log(circle1);
console.log(circle1.getColour());
console.log(circle1.getradius());

