```js


const num1 =1 
const num2=2 
const num3 = 3
function multiplyThreeNums (num1,num2,num3){
    return num1 * num2 * num3
}

```

```js
function logOddNums (i){
    for (let i=0; i< 22; i+=2){
        console.log(i)
    }

}

```

```js
let dayOfWeek = 3;
let dayName;

switch (dayOfWeek) {
  case 1:
    dayName = "Sunday";
    break;
  case 2:
    dayName = "Monday";
    break;
  case 3:
    dayName = "Tuesday";
    break;
  case 4:
    dayName = "Wednesday";
    break;
  case 5:
    dayName = "Thursday";
    break;
  case 6:
    dayName = "Friday";
    break;
  case 7:
    dayName = "Saturday";
    break;
  default:
    dayName = "Invalid day";
    break;
}

console.log(`Today is ${dayName}.`);

```

```output
Today is Tuesday.
```

```js
let myFavCelebs = ['Maya Angelou', 'Michael Jackson', 'Prince', 'Myles Davis', 'Mansa Musa'] 
    for (let i = 0 ;i < myFavCelebs.length; i++) {
        console.log(myFavCelebs[i])
    }

  let fullName = myFavCelebs[i];

  if (fullName.length % 2 === 0) {
    console.log(fullName);
  }


```

```output
Maya Angelou
Michael Jackson
Prince
Myles Davis
Mansa Musa
/private/var/folders/hb/wb3jp74d0pzdfrx784c71g1r0000gn/T/md-notebook/main.js:62
let fullName = myFavCelebs[i];
                           ^

ReferenceError: i is not defined
    at Object.<anonymous> (/private/var/folders/hb/wb3jp74d0pzdfrx784c71g1r0000gn/T/md-notebook/main.js:62:28)
    at Module._compile (node:internal/modules/cjs/loader:1241:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1295:10)
    at Module.load (node:internal/modules/cjs/loader:1091:32)
    at Module._load (node:internal/modules/cjs/loader:938:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:83:12)
    at node:internal/main/run_main_module:23:47

Node.js v20.8.0
```

```js
let hasDoneChores = true;
let getTVTime;

if (hasDoneChores) {
  getTVTime = true;
} else {
  getTVTime = false;
}

```