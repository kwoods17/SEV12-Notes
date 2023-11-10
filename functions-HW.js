/* 
1. **Array Multiplication**:
   Write a function that takes in an array of numbers and returns a new array containing the numbers multiplied by 2.
   - Example: If you pass in the array [2, 3, 4], the function should return [4, 6, 8]. */
   function multiplyByTwo(arr) {
    let result = []
    for (let i = 0; i < arr.length; i++) {
        result.push(arr[i] * 2)
    }
    return result
}

/*
2. **String Length Check**:
   Write a function that takes in a string and a number, and returns true or false if the string's length is greater than the given number.
   - Example: string = "hello", number = 4, should return true.
   - Example: string = "hi", number = 4, should return false. */
function isStringGreaterThanNum (str, num)
return str.length > num
/*
3. **Last Names Extraction**:
   Write a function that takes in an array of full names (formatted "firstName lastName"), and returns a new array containing only last names.
   - Example: array = ["Jane Doe", "Sam Brown", "Lucy Green"] returns ["Doe", "Brown", "Green"]. */
function lastName (arrOfNames)
    let arrOfNames = ['Jane doe', 'John Smith']{
 return arrOfNames.map=arrOfNames => arrOfNames.split('')[1]
    }
/*
4. **Personalized Message**:
   Write a function that takes in a person's name and their favorite color, and logs a string to the console saying that the color suits them.
   - Example: name = "Alice", color = "blue", returns "Blue really suits you, Alice!" */
function personalFavs (Name, favoriteColor){
    console.log(' ${name}, your favorite color ${favoriteColor} suits you well.')
    personalFavs('Aventurine', Green)
}
    
/*
5. **Year to Century Conversion**:
   Write a function that takes in a year and returns the century it belongs to.
   - Example: year: 1999 returns "20th century".
   - Example: year: 2023 returns "21st century". */
   function yearOfTheCentury (year)
