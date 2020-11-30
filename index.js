
var readlineSync = require('readline-sync');
var Chalk =require('chalk');
var name = readlineSync.question(Chalk.cyan('Please, Give your name '));
console.log(Chalk.green("Welcome ") + name +Chalk.green( " to IPL Quiz "));
console.log(Chalk.yellow.bold("----BEGIN-----"));
console.log(Chalk.white.bold("Enter only the option no. like a or b or c or d"));
console.log();
score=0;

 var questionOne = {
  question : "How many finals has Mahendra Singh Dhoni played in the IPL?",
  option1 : "a) 5",
  option2 : "b) 8",
  option3 : "c) 3",
  option4 : "d) 6",
  answer : "b",
}

var questionTwo = {
  question : "Which cricketer has scored the fastest hundred in the IPL? ",
  option1 : "a) Virat Kohli",
  option2 : "b) David Warner",
  option3 : "c) AB de Villiers",
  option4 : "d) Chris Gayle",
  answer : "d",
}

 var questionThree = {
  question : "Which team has successfully defended its title in the IPL?",
  option1 : "a) Chennai Super Kings",
  option2 : "b) Kolkata Knight Riders",
  option3 : "c) Deccan Chargers",
  option4 : "d) Mumbai Indians",
  answer : "d",
}

var questionFour = {
  question : "Which cricketer has bowled the most number of dot balls in the IPL? ",
  option1 : "a) Praveen Kumar",
  option2 : "b) Lasith Malinga",
  option3 : "c) Harbhajan Singh",
  option4 : "d) Sunil Narine",
  answer : "a",
}

var lvl1 =[questionOne, questionTwo,questionThree, questionFour];

function play(question, option1, option2, option3, option4, answer)
{
  console.log(Chalk.bgBlue.bold(question));
  console.log();
  console.log(Chalk.blue.bold(option1));
  console.log(Chalk.blue.bold(option2));
  console.log(Chalk.blue.bold(option3));
  console.log(Chalk.blue.bold(option4));
  console.log();
  var userAns = readlineSync.question(Chalk.cyan('Enter your answer '));
  if(userAns.toUpperCase() === answer.toUpperCase())
  {
    console.log(Chalk.green(" Correct!!"));
    score++;
  }
  else
  {
    console.log(Chalk.red(" Wrong!!"));
  }
  console.log(Chalk.yellow.bold("----------"));
}

for(var i=0;i<lvl1.length;i++)
{
  var currentQus=lvl1[i];
  play(currentQus.question,currentQus.option1,currentQus.option2,currentQus.option3,currentQus.option4,currentQus.answer);
}
console.log(Chalk.bgMagenta("Final Score = " + score));
console.log();
console.log(Chalk.yellow.bold("----END-----"));
console.log();
console.log(Chalk.green.bold("High Scorer - Aditya (3) & Iram (3)"));