// 1.   Write a function that tests if a string contains the string of '123' within it
const str ='123'
console.log(str.match(/123/))

// 2.   Write a function that tests if a string contains the letter 'a' then the letter 'c' at any point afterward
//      ex: 'abc' => true
//      ex: 'aTc' => true
//      ex: 'a113412341234c' => true
//      ex: 'ac'  => true
//      ex: 'abd' => false
//      ex: 'ca'  => false
const str2 ="abc123"
//console.log(str2.match(/a|c/g))   or
function test(str2){
    return /a.*c/.test(str2)
}console.log(test(str2))
// 3.   Write a function that reports how many instances of a given string there are 
const countInstances = (str, subStr) => {
    return str.match(
        new RegExp(subStr, 'g')
      )?.length
  }
//      This function should take in a string and a substring to look for 
//      Input: 'this is a test', 't'
//      Output: '3'
function countSubstring(str, sub) {
const regex = new RegExp(sub, 'g')
let matches = str.match(regex)
return (matches === null) ? 0 : matches.length
}
console.log(countSubstring('this is a test', 't'))
// // 4.   Write a function that checks if all characters in a string are lowercase letters
// function test(string){
//     return /^[a-z]+$/.test(string)
// }

// // 5.   Write a function that checks if a string has an uppercase letter
// function uppercase(str) {
//     regex = /[A-Z]/
//     return regex.test(str)
//    }


// // 6.   Write a function that checks if a string contains a dash or underscore 
// function test(string){
//     return /^[-|_]+$/.test(string)
// }

// // 7.   Write a function that utilizes regex to check if a string contains '.com' at the end
// const endsInCom = (str) => /\.com$/.test(str)


// // 8.   Write a function that utilizes regex to check if a string contains 'http://' or 'https://' at the beginning
// const containsInUrl = (str) => /'http:\//^'| 'https:\//^'/.test(str)

// 9.   Write a function that utilizes regex to indicate if a string's first letter is uppercase or not
function isFirstLetterUppercase(str) {
    const string5 = /^[A-Z]/
    return string5.test(str)
}
console.log(isFirstLetterUppercase('Hello')); // true
console.log(isFirstLetterUppercase('hello')); // false
// 10.   Write a function that utlizes regex to replicate the functionality of '  string  '.trim()
function trim(str) {
    const string6 = /^\s*|\s*$/g
    return str.replace(string6, '')
}
console.log(trim('   Hello   ')); // 'Hello'