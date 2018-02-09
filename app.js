let LEVEL = 2;

function generateRandomNumber(LEVEL) {
  return Math.floor(Math.random() * Math.pow(10,LEVEL));
}

function getNumbers(){
  num1 = generateRandomNumber(LEVEL);
  num2 = generateRandomNumber(LEVEL);
  highNum = Math.max(num1, num2);
  lowNum = Math.min(num1,num2);
  return [lowNum, highNum];
}

function addMath() {
  Num = getNumbers();
  lowNum = Num[0];
  highNum = Num[1];
  answer = highNum + lowNum;
  console.log(`${highNum} + ${lowNum} = `);
  return answer;
}

while (true) {
  answer = addMath();
  var userAnswer = prompt('What is the answer?');
  if (userAnswer === 'exit'){
    break;
  } else {
    if (userAnswer === answer) {
      console.log('good');
    } else {
      console.log('bad');
    }
  }
}
