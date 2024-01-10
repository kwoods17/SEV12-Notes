// 1.   What is the order of output?
setTimeout(() => {
    console.log('a');
}, 10);
console.log('b');

new Promise( (res,rej) => {res('c')}).then((val) => console.log('d', val));
console.log('e');

setTimeout(() => {
  console.log('f');
}, 0);

setTimeout(() => {
    console.log('g');
}, 20);

new Promise( (res) => {res('h')}).then(res => console.log(res, 'i'))
//answer=b,d,c,e,h,i,a,f,g

// 2.   Create a new promise for something you may or may not do. 
//      After a few seconds log whether it has been done.

let dinnerPromise = true
let madeDinner = new Promise (function(resolve, reject) {
     setTimeout(() => {
        if (dinnerPromise) {
            resolve("I made dinner.")
        } else {
            reject("I forgot to make dinner.")
        }
        }, 5 * 1000)
     })
     console.log(madeDinner)
     setTimeout(() => {
     console.log(madeDinner)
     }, 5001)

// 3.   Using the prior example use .then and .catch to handle responses and rejections

madeDinner.then(result => {
    14  console.log(result); // logs "I made dinner." after 5 seconds
    15}).catch(error => {
    16  console.log(error); // logs "I forgot to make dinner." if dinnerPromise is false
    17});
// 4.   What does a promise resolve to?

//A completed operation or in this case an error.

// 5. What is the output of the following code?


const promise = new Promise(res => res(2));
promise.then(v => {
    console.log(v);
    return v * 2;
})
.then(v => {
    console.log(v);
    return v * 2;
})
.then(v => {
    console.log(v);
    return v * 2;
})
.then((v) => {
    console.log(v);
  });

