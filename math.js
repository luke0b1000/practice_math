/* read cli inputs */
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let u_level = 2; //set the level

class Addition {
    constructor(u_level) {
        this._high;
        this._low;
        this._correct_answer;
        this.getNumber(u_level);  //sets up the numbers
    }
    
    /* generate random number */
    randomNumber(u_level) {
        return Math.floor(Math.random() * [10,100,1000][u_level]);
    }
    /* called from constructor to setup the high low number */
    getNumber(u_level) {
        /* get high and low random number */
        let a = this.randomNumber(u_level);
        let b = this.randomNumber(u_level);
        this._high = Math.max(a, b);
        this._low = Math.min(a,b);
        this._correct_answer = this._high + this._low;
    }
    
    /* Display the math part */
    displayMath() {
        console.log(String(this._high).padStart(11));  //convert to string so can use padStart for better formatting
        console.log('+'+String(this._low).padStart(10));
        console.log(''.padStart(11,'-'));
    }
    /* Display the math question */
    displayQuestion() {
        rl.question('What is the answer to? ', (u_input_answer) => {

            if (parseInt(u_input_answer) === this._correct_answer) {  //parseInt to convert input string to integer
                console.log('You are correct');
            } else {
                console.log('You are incorrect');
            }
            console.log(`The correct answer is ${this._correct_answer}`);
        
          rl.close();
        });
    }
    /* setup the display */
    display() {
        this.displayMath();
        this.displayQuestion();
    }
}

problem = new Addition(u_level);
problem.display();