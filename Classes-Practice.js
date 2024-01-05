/* Question 1
Write a class that creates an animal
class Animal

The animal class should have the following properties:
  - name
  - noise
  - eats
  - lives

  constructor(name,noise,eats,lives) {
    this.name = name;
    this.noise = noise;
    this.eats = eats;
    this.lives = lives;
  }
The animal class should have the following methods:
  - makeNoise
  - eatsWhat
  - livesWhere

makeNoise (){
    return this._makeNoise
}
eatsWhat (){
    return this._eatsWhat
}
livesWhere (){
    return this._livesWhere
}

Initialize 3 animals with your class & log a sentence to the console, ex:
`Dogs live in peoples houses, they bark and are carnivorous.`

const myCat = new Animal ('Pasha', 'meow','tuna','home')
const pigs = new Animal ('Pigs', 'oink', 'slop', 'barn')
const owls = new Animal ('Owls', 'whoot', 'mice', 'tree')
console.log(`${this._name} says ${this.noise}, eats ${this.eats} and lives in a ${this.lives}.`)

/* Question 2
Write a class that creates shoes
The shoe should have the following properties:
  - size
  - color
  - type
  - age
  class Shoe {
  constructor(type, color, size, age) {
    this.type = type;
    this.color = color;
    this.size = size;
    this.age = age;
  }
  
  get info() { return `My ${this.shoe} are ${this.color}, ${this.size}, and ${this.age} years old.`}
  }
}


Initialize 3 shoes with your class & log a sentence to the console:
  ex: `My flipflops are yellow, size 9, and 6 years old.`

  

const basketballShoe = new Shoe('basketball', 'blue', 5); 
{ return `My ${this.shoe} are ${this.color}, ${this.size}, and ${this.age} years old.`}



const runningShoe = new Shoe('running', 'grey', 8);
{ return `My ${this.shoe} are ${this.color}, ${this.size}, and ${this.age} years old.`}

const highHeeledShoe = new Shoe('dress', 'pink', 2);
{ return `My ${this.shoe} are ${this.color}, ${this.size}, and ${this.age} years old`}

 
console.log(basketballShoe.info);
console.log(runningShoe.info);  
console.log(highHeeledShoe.info);


```js

```
//Question 3**
 
// **Part A:**
// Write a class named `Vehicle` with the following properties:
// - `type` (e.g., car, truck, motorcycle)
// - `color`
// - `wheels`
 
// And the following methods:
// - `vehicleInfo` which returns a string with the type, color, and number of wheels of the vehicle.
 
// **Part B:**
// Create a subclass named `Car` that inherits from `Vehicle` and adds the following:
// - An additional property `brand`.
// - Override the `vehicleInfo` method to include the brand of the car.
 
// Initialize an instance of `Car` and log its information to the console.




class Vehicle;
constructor('type', 'color', 'wheels');
this.type = type;
this.color = color;
this.wheels = wheels;

vehicleInfo() { return `My car is a ${this.type}, ${this.color}, and has ${this.wheels} wheels.`}


class Car extends Vehicle {
  constructor(brand);{
  super(brand)
  this.brand = brand;
  }
}

vehicleInfo() { return `My car is ${this.brand} ${this.type}, ${this.color}, and has ${this.wheels} wheels.`}
const car = new Car ('sedan', )