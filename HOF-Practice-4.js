// .forEach Practice

/* Question 1
Given an array of numbers, log each number to the console. */
const nums = [1,2,3,4,5]
nums.forEach(num => console.log(num))

/* Question 2
Given an array of people, log a greeting to the console for each person. */
const names = ['Jon', 'Ali','Bob']
names.forEach(name => console.log('Hello, ${name}!'))


/* Question 3
Given an array of mixed values, log whether or not each value is undefined. */
const mixed = [1, 'hello', undefined, true, null, false, 'world', undefined]
mixed.forEach(value => console.log(value === undefined))

/* Question 4
Given an array of strings, log the vowel count for each string. */
const arrayOfStrings = ['Hi!', '🎶', "It's", 'a', 'beautiful', 'day', 'in', 'the', 'neighborhood', '🎶']
// arrayOfStrings.forEach(function())
str.split('').filter(char => 'aeiou' && 'AEIOU' console.log('Vowel count for '${str}' , '${vowelCount}'))

/* Question 5
Given an array of numbers, double each of them and log them to the console */
const numbers = [1, 2, 3, 4, 5]
numbers.forEach(num => console.log(num*2))