/* Question 1
Write a higher-order function which takes in two numbers and performs a calculation with them

Write the callback functions separately
  Example:
    calculate(multiply, 2,4) => 8
    calculate(subtract, 2,4) => -2
    calculate(exponent, 2,4) => 16   */

const calculate = (callback, num1, num2) => callback(num1, num2)
console.log(calculate(multiply, 2, 4)) //8

const multiply = (num1, num2) => num1 * num2
const subtract = (num1, num2) => num1 - num2
const exponent = (num1, num2) => num1 ** num2

console.log(calculate(multiply, 2, 4))
console.log(calculate(subtract, 2, 4))
console.log(calculate(exponent, 2, 4))

/* Question 2
Write a function that takes in any number of numbers and performs calculations on them
console.log(arguments) inside of a function to visualize your arguments
Write the callback functions separately
  Example:
    calculateAll(multiply, [ 1,4,1,231,5 ]) => 4620
    calculateAll(subtract, [ 2,4,5,7 ]) => -14
*/
// const calculateAll(callback,[1,3,5,7,9,11,13]) => callback([1,3,5,7,9,11,13])

const calculateAll = (func, numbers) => {
  let result = numbers[0]
  for (let i = 1; i < numbers.length; i++) {
    result = func(result, numbers[i])
  }
  return result
}


//const multiply = (x,y) => 

/* Question 3
Write a function that takes in a string and performs some form of manipulation on it
  Example:
    modify(yeller, 'I need a nap') => I NEED A NAP!!!
    modify(sarcastic, 'I really like running') => I ReAlLy lIkE RuNnIng
    modify(code, 'There is no cake') => Th-r- -s n- c-k-
*/
const modify = (func, string) => func(string)
const yeller = (string) => {
  let allCaps = ('')
  for (let i = 0; i < string.length; i++) {
    string[i].toUpperCase()
  }

}

/* Question 4
Write a function that takes in an array filled with different data types and returns each data type
  Examples:
    oneType(strings, ['I love coding', 10, undefined, Infinity, 'goosfraba', null, ['Nested Array!']]) 
    =>
    ['I love coding, 'goosfraba']

    oneType(arrays, ['I love coding', 10, undefined, Infinity, 'goosfraba', null, ['Nested Array!']]) 
    =>
    ['Nested Array!']

    oneType(nums, ['I love coding', 10, undefined, Infinity, 'goosfraba', null, ['Nested Array!']]) 
    =>
    [10, Infinity]
*/

