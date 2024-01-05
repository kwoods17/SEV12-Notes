// // .sort() Practice

// /* Question 1
// Write a HOF to sort an array of numbers from largest to smallest */
// const nums = [1, 25, 6, 3, 88, 45, 0]
// nums.sort((a, b) => b > a ? 1 : -1)
// console.log(nums)
// /* Question 2
// Write a HOF to sort peoples names by their length */
 const partyPeople = [{ name: 'John', age: 25 }, { name: 'Jordan', age: 18 }, { name: 'Frank', age: 50 }, { name: 'Anna', age: 12 }]

// const sortPeopleByNameLength = (peopleArray) => {
//     const compareByNameLength = (a, b) => a.name.length - b.name.length;

//     const sortedPeople = peopleArray.slice().sort(compareByNameLength);
//     return sortedPeople;
// };
// const sortedPartyPeople = sortPeopleByNameLength(partyPeople);

// console.log(sortedPartyPeople);


/* Question 3
Write an HOF to sort an array of objects of people by their age youngest to oldest */
const sortPeopleByAge = (peopleArray) => {
    const compareByAge = (a, b) => a.age - b.age;

    const sortedPeople = peopleArray.slice().sort(compareByAge);
    return sortedPeople;
};
const sortedPartyPeople = sortPeopleByAge(partyPeople);

console.log(sortedPartyPeople);

/* Question 4
Write an HOF to sort an array of strings by the last letter of the string */
const strings = ['sam', 'john', 'daniel', 'vanessa']
const lastChar = strings.sort((a, b) => -1)
console.log(lastChar)