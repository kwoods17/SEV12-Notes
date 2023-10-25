// 1.   Create an array that contains two of your favorite things to do
const favoriteThings = ['learning', 'singing'];


// 2.   Using an array method, add another thing you like to do to that list
favoriteThings.push('cooking'); {
    console.log(favoriteThings)
}
// 3.   Reverse the order of the array (remember, if needed use MDN)
const reversed = favoriteThings.reverse();{
    console.log(reversed)
}
//      Use this array for questions 4-11: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
// 4.   log the length of the array
const daysOfTheWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
// 5.   log the 4th element in the array
const fourthElement = daysOfTheWeek[3] 
    console.log(fourthElement)
    // 6.   Remove the first element in the array. Log the new array and the element removed from the array
const removedElement = daysOfTheWeek.shift()

// 7.   Put 'Sunday' back at the beginning of the array and log the new array
daysOfTheWeek.unshift('Sunday')
// 8.   Remove the last element in the array. Log the new array and log the element removed
const removedElement2 = daysOfTheWeek.shift(-1)
// 9.   Add 'Saturday' back to the end of the array and log the new array
daysOfTheWeek.unshift('Saturday')
//10.   Replace 'Thursday' with 'Friday Junior'
const replacedElement = daysOfTheWeek.r
//11.   Extract your favorite day from the array and log the string: 'My favorite day of the week is (day)'
const favoriteDay = 'Saturday';
console.log(`My favorite day of the week is ${favoriteDay}`);

//12.   Combine these two arrays together
let phone = ['iphone', 'android']
let laptop = ['MacBook', 'HP', 'Dell']
let combinedArray = phone.concat(laptop);

//13.   Write a line of code to test if something is an array or not
const isAnArray = array.isArray(combinedArray)
console.log(isAnArray)