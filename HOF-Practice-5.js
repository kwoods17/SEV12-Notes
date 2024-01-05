// .filter() Practice

/* Question 1
Write a function to filter an array for all the numbers greater than 5 */
 const q1Array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] 

//iterate through array removing all numbers less than 5 - filter
 console.log(q1Array.filter(num =>  num > 5))

// /* Question 2
// Write a function to filter an array for all the even numbers */
 const q2Array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
 console.log(q2Array.filter(num =>  num % 2 === 0))


// /* Question 3
// Write a function to filter an array for all the non number item */

 const q3Array = [1, 'a', 'b', 2, {}, []]
//iterate through array removing all numbers- filter
//if typeof num === 'number'
// return true
//else
//return false
// const filterNonNumbers = array => array.filter(item => typeof item !== 'number')
// console.log(filterNonNumbers(q3Array))
//or
 console.log(q3Array.filter(num => typeof num === 'number'))


// /* Question 4
// Write a function to filter an array of objects for people over the age of 21 */
const partyPeople = [
  { name: 'John', age: 25 },
  { name: 'Jordan', age: 18 },
  { name: 'Frank', age: 50 },
  { name: 'Anna', age: 12 }
 ]
// const peopleOver21 = people => people.filter(person => person.age > 21)
// console.log(peopleOver21(partyPeople))
//or 
//filter through array - filter -> return array of people over 21
let peopleOver21 = partyPeople.filter(person => person.age > 21)

//iterate through and log each person's name - forEach -> console.log(person.name)
peopleOver21.forEach(person => console.log(person.name))

/* Question 5
Write a function to filter out all letters from a string
Hint: filter doesn't work on strings.. */
// function filterAllLetters(str){

// console.log(filterAllLetters = str => str.split('').filter( !(('a' <= char && char <= 'z') || ('A' <= char && char <= 'Z'))))}
 
console.log('Hello World'.split('').filter(char => char !== '').join(''))

let alphabet = 'abcdefghijklmnopqrstuvwxyz'

console.log('Hello World'.split('').filter(char => alphabet.includes(char.toLowerCase())).join(''))