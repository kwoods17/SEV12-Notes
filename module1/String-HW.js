//SUBMIT A LINK TO THE GITHUB REPOSITORY CONTAINING THIS ASSIGNMENT
// 1. Concatenate "hello" with "goodbye"
 const string1 = "hello"
 const string2  = "goodbye"
const concatenatedString = (string1 + string2); {
    console.log(concatenatedString);

}





// 2. Save the substring "Friend" from the string "Hello Friend"
const greeting = "Hello Friend"

// 3. Using 5 or more of the following words, create a template literal that makes a legible sentence.
//    Do not create your own words, use the existing ones below!
const word1 = "hello"; 
const word2 = "horror";
const word3 = "peace";
const word4 = "world"
const word5 = "dislike"; 
const word6 = "umbrella"; 
const word7 = "car"; 
const word8 = "pasta"; 
const word9 = "pizza"; 
const word10 = "movies";
const word11 = "football"; 
const word12 = "soccer"; 
const word13 = "eat"; 
const word14 = "cookie"; 
const word15 = "favorite";
const word16 = "makeup"; 
const word17 = "I"; 
const word18 = "to"; 
const word19 = "my";
const word20 = "is";
const word21 = "and";
const word22 = "also";
const word23 = "like"; 

// 4. Given the string of your full name get your initials.


// 5. Get the 5th character from the following string: 'Hello World'
const greeting1 = 'Hello World'

// 6. Find the index of the dash from 'Coding-Time!'
const coding = 'Coding-Time!'

// 7. Write code to grab the final letter from a any string.
const string = "string"

// 8. Write code to grab the first 3 letters from a string. 


// 9. Turn the following string into an array of words: 'This-is-a-sentence';
const sentence1 = 'This-is-a-sentence'

// 10. Make the string of 12 from the following two numbers:
let one = 1;
let two = 2;

```js
//SUBMIT A LINK TO THE GITHUB REPOSITORY CONTAINING THIS ASSIGNMENT
// 1. Concatenate "hello" with "goodbye"
const string1 = "hello"
const string2  = "goodbye"
const concatenatedString = (string1 + string2); {
   console.log(concatenatedString);
}

// 2. Save the substring "Friend" from the string "Hello Friend"
const greeting = "Hello Friend"
const substring= greeting.substring (6);{
   console.log(substring)
}

// 3. Using 5 or more of the following words, create a template literal that makes a legible sentence.
//    Do not create your own words, use the existing ones below!
const word1 = "hello"; 
const word2 = "horror";
const word3 = "peace";
const word4 = "world"
const word5 = "dislike"; 
const word6 = "umbrella"; 
const word7 = "car"; 
const word8 = "pasta"; 
const word9 = "pizza"; 
const word10 = "movies";
const word11 = "football"; 
const word12 = "soccer"; 
const word13 = "eat"; 
const word14 = "cookie"; 
const word15 = "favorite";
const word16 = "makeup"; 
const word17 = "I"; 
const word18 = "to"; 
const word19 = "my";
const word20 = "is";
const word21 = "and";
const word22 = "also";
const word23 = "like"; 

const  sentence = `${word17} ${word23} ${word18} ${word13} ${word9}`;{
   console.log(sentence)
}

// 4. Given the string of your full name get your initials.
const fullName = "Kenya Woods"
const [firstName, lastName] = fullName.split(" ");
const initials = `${firstName[0]}.${lastName[0]}.`;{
   console.log(initials)
}
   
// 5. Get the 5th character from the following string: 'Hello World'
const greeting1 = 'Hello World';
const fifthCharacter = greeting1[4]; {
   console.log(fifthCharacter)
     }


// 6. Find the index of the dash from 'Coding-Time!'
const coding = 'Coding-Time!'

const dashIndex = coding.indexOf('-'); {
   console.log(dashIndex)
}

// 7. Write code to grab the final letter from a any string.
const string = "string"
const finalLetter = string.slice();{
   console.log(finalLetter)
}
// 8. Write code to grab the first 3 letters from a string. 
const string3 = "Sunday" 
{
   console.log(string3.slice(0, 3))
}

// 9. Turn the following string into an array of words: 'This-is-a-sentence';
const sentence1 = 'This-is-a-sentence' 
{
   console.log(sentence1.split("-"))
}


// 10. Make the string of 12 from the following two numbers:
let one = 1;
let two = 2;
let concatenatedString2 =(`1`+`2`);{
   console.log(concatenatedString2)
}
```

```output
hellogoodbye
Friend
I like to eat pizza
K.W.
o
6
string
Sun
[ 'This', 'is', 'a', 'sentence' ]
12
```