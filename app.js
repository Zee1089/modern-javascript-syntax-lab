// const array1 = ['vanilla', 'chocolate', 'strawberry'];

// const array2 = array1.map((currentElement) => {
//   return currentElement + ' ice cream';
// });

// console.log(array2); // ['vanilla ice cream', 'chocolate ice cream', 'strawberry ice cream']

//Exercise 1: Applying Array.prototype.map()

// Use `.map()` to iterate over the following array:

const nums = [13, 87, 2, 89, 12, 4, 90, 63];
const nums2= nums.map((e) => {
    return e * 2;
})

console.log(nums2)  
// Create a new array where each value is multiplied by 2 and log the new array.

// Exercice 2 

// const petsArray = ['Rover', 'Snuffles', 'Toto', 'Spot'];
// const [firstPet, secondPet] = petsArray;

// console.log(firstPet); // 'Rover'
// console.log(secondPet); // 'Snuffles'

// // Equivalent in traditional bracket notation:
// console.log(petsArray[0]); // 'Rover'
// console.log(petsArray[1]); // 'Snuffles'


// Given the following array, use destructuring to pull out the first and second values and place them into variables. Log both variables.

const pizzaToppings = ['Pineapple', 'Olives', 'Anchovies'];
const [firstTopping, SecondTopping] = pizzaToppings;

console.log(firstTopping);
console.log(SecondTopping);

console.log(pizzaToppings[0]);
console.log(pizzaToppings[1]);

// Your code here
//Exercice 3

// const person = {
//     name: 'Alex',
//     role: 'Software Engineer',
//   };
  
//   // Object destructuring:
//   const { name, role } = person;
  
//   console.log(name); // 'Alex'
//   console.log(role); // 'Software Engineer'
  
//   // Equivalent in traditional dot notation:
//   console.log(person.name); // 'Alex'
//   console.log(person.role); // 'Software Engineer'
  

  // Given the following object, use destructuring to create variables `make` and `model` that will hold the respective values.
//Exercice 3
const car = {
    make: 'Audi',
    model: 'q5',
  };
  
 // Your code here
  const {make, model} = car;
  console.log(make);
  console.log(model);

  console.log(car.make);
  console.log(car.model);

  //Exercise 4 


// const originalArray = [1, 2, 3];
// const duplicateArray = [...originalArray];
// console.log(duplicateArray); // [1, 2, 3]
  
  // Duplicate the following array using the spread operator and assign it to `controversialPizzaToppings`. Then, log the variable.

const pizzaToppings2 = ['Pineapple', 'Olives', 'Anchovies'];
const controversialPizzaToppings = [...pizzaToppings2];

// Your code here


//Exercise 5 
// Duplicate the following object and spread its values into a new variable `myCar`.

const car1 = {
    make: 'Audi',
    model: 'q5',
  };
  
  // Change the `model` property of `myCar` to 'q7'. Log both objects.
  
  // Your code here

const clonedObject = {...car1};
console.log( clonedObject);

// Change the `model` property of `myCar` to 'q7'. Log both objects.

// Your code here
clonedObject.model = 'q7'
console.log(car1);
console.log(clonedObject);

//Exercise 6 

// Create an object named userProfile. 
// Define a variable named propertyName and assign a string to it (like a username, age, or email). 
// Use propertyName as a dynamic key in userProfile, assigning a relevant value.

// Your code here

const userProfile = {
    email: 'pioupiou@gmail.com',
    phone: 'nokia',
};

const propertyName = 'email';
const emailname = userProfile[propertyName];
console.log(emailname);


//
const propertyName2 = 'Yaou';
const userProfile2 = {
    [propertyName2] : 'Ethan',
};
console.log(userProfile2);



//Exercise 8

function addThreeNumbers(numA = 1, numB = 2, numC = 1) {
    return numA + numB + numC;
  }
  
  addThreeNumbers(2);

  // Create a function that takes two parameters, `noun` and `adjective`, both with the following respective default values:

// 1. `cat`

// 2. `white`

// The function should log a sentence 'The cat is white.' by default. The function should substitute the appropriate parameters when supplied arguments.

// Your code here

function addTwo(noun = 'cat', adjective = 'white') {
    const result = `The ${noun} is ${adjective}`;
    return result;
}

// Example usage
console.log(addTwo()); // Output: "The cat is white"
console.log(addTwo('horse', 'multicolor')); 

// Convert the following `if...else` statement in to a ternary:


//Exercise 9

const age = 22;
let access = age > 21 ? 'Yes' : 'No';

console.log(access); // 'Yes'

let pizza = 'meh';
let taste = pizza === 'tasty'? 'yum' : 'yuck';
console.log(taste)

// Your code here


