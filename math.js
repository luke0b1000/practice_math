/* read cli inputs */
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let u_level = 1; //set the level

/* generate random number */
function randomNumber(u_level) {
    return Math.floor(Math.random() * [10,100,1000][u_level]);
}

/* get high and low random number */
let a = randomNumber(u_level);
let b = randomNumber(u_level);
let high = Math.max(a, b);
let low = Math.min(a,b);
let correct_answer = high + low;

console.log(`    ${high}`);
console.log(`+   ${low}`);
console.log(`------`);


rl.question('What is the answer to? ', (u_input_answer) => {
    if (parseInt(u_input_answer) === correct_answer) {  //parseInt to convert input string to integer
        console.log('You are correct');
    } else {
        console.log('You are incorrect');
    }
    console.log(`The correct answer is ${correct_answer}`);

  rl.close();
});