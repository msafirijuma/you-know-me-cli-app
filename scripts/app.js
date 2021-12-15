
/* 

?embed=1&output=1


Shared link

https://replit.com/@InvicibleCoder/You-Know-Me-CLI-App#index.js?embed=1&output=1

*/

/* This is my first version of this App, as I've intended to go higher than this one by introducing some level from easy to difficult question */

/* 
 The second part of this App will be interesting including multiple choice questions where you can select right answer from among the answers listed...
*/

/* Also part 3 will be left for my community to share what to be added to make the App more reality by introducing amazing features..*/


var readlineSync = require('readline-sync');
var chalk = require('chalk');

console.log(chalk.magenta.bold("**** You Know Zulfy App ***"));


// English Version

function englishVersion(){
  
//console.log("English")  


var readlineSync = require('readline-sync');
var chalk = require("chalk");
var regExpression = /^[a-zA-Z]+$/; 

//console.log(chalk.magenta.bold("**** You Know Zulfy App ***"));

console.log("")


// Taking player name
var userName= readlineSync.question("Hey, What's your name : ");
console.log("")

var helloUser = "Hello, Welcome";

if(userName.match(regExpression)){
console.log(chalk.cyan.bold(helloUser),chalk.bold.italic.magenta(userName));
console.log("");
var score = 0;

console.log(chalk.magenta.underline.bold("About App"));
console.log(("1. This is the funny CLI APP about me(Msafiri),you have to answer a question based on what yoh know about me i.e my personal details😊😊"));
console.log("2. You will be rewarded one point of score for correct answer.  ")
console.log("3. At the end of quiz, your total score and high score list will be printed so that to check if you've beaten high scores.. ")
console.log("")
console.log(chalk.cyan("********************************"));
console.log(""); 





var userSelection= readlineSync.question("Do you wish to continue to quiz App?, type y to continue and type n to quit. (y/n) :  ");
console.log("");

if(userSelection === "y"){
console.log(chalk.cyan("********************************"));
console.log(""); 
console.log(chalk.magenta.underline("Let's start the quiz."));


  
var questionsList = [
  
   {
 question: "(1) What's my father's name?:",   
  answers: ["Ismail", "Juma","Issa", "Athman"],  
  answer: "Juma"
    },

  {
 question: "(2) What is my favourite football club in Europe?: " , 
  answers : ["Liverpool","Arsenal","Mainz 05", "Manchester United"],
  answer:"Liverpool"
    },

  {
 question: "(3) When did I complete my primary education?: " ,
  answers : ["2000", "2003", "2012", "2009"],
  answer: "2009"
    },

  { 
  question: "(4) Which among the following is my favourite sport?: " ,
  answers : ["Football","Biking","Swimming","Boxing"],
  answer:"Football"
    },

  {
 question: "(5) Where do I live?: " ,  
  answers : ["Dodoma","Mwanza","Dar Es Salaam", "Mtwara"],
  answer:"Dar Es Salaam"
    },
  
  {
    question: "(6) What is my tribe?: " ,
    answers: ["Makonde", "Ndengereko","Zaramo","Makua"],
    answer: "Makonde"
  },
  
  {
    question: "(7) In which hospital was I born?: ",
    answers: ["Mwananyamala","Muhimbili","Temeke","Amana"],
    answer: "Temeke"
  },

  {
    question: "(8) What's my primary school's name?: ",
    answers: ["Kibasila","Unubini","Chang'ombe","Taifa"],
    answer: "Unubini"
  },

  {
    question: "My religion is : ",
    answers:["Islam","Christian","Judaism","Sabath"],
    answer: "Islam"
  },

  {
    question: "(10) In which year was I born?: " ,
    answers: ["1994","1995","1996","1997"],
    answer: "1997"
  }
]
  
function checkingUserAnswer(question,answers,answer){
var userAnswer = readlineSync.keyInSelect(answers,question);
  
if(answers[userAnswer] === answer){
  console.log(chalk.green.bold("You are correct!"));
  score = score + 1;
} else{
  console.log(chalk.bold.red("You are wrong!"));
  console.log(chalk.green.bold("The correct answer is",answer));
}

if( score < 0){
   score = 0;
 }

console.log("Score is", chalk.blue(score));


  console.log(chalk.cyan("**********************************"));
console.log("");
  
}


// Looping through all questions by calling a function several times

for(var i=0; i< questionsList.length; i++){
  currentQuestion = questionsList[i];
  checkingUserAnswer(currentQuestion.question, currentQuestion.answers, currentQuestion.answer);

}

console.log(chalk.blueBright.bold("Total score is",score));
// Checking User score
var userHighScore = [
  // Scorers database *******
  {
  username: "Msafiri",
  highScore: 10
  },

  {
    username : "My Girl",
    highScore: 6
  },

  {
    username: userName,
    highScore: score
  }
]

  if(userHighScore[2].highScore > userHighScore[1].highScore){
    console.log(chalk.greenBright.bold("Congrats!",userHighScore[2].username,"You've beaten high score"));
console.log(chalk.blueBright.bold("Bet who? You've beaten",chalk.cyan.italic.bold(userHighScore[1].username)));
  } else{
    console.log(chalk.red.bold("Nice try, you didn't beat high score."));
    console.log(chalk.blueBright.bold("Try again to know whom?😁"));
  }
console.log("");
console.log(chalk.cyan("**********************************"));
console.log("")
console.log(chalk.bold.blueBright("Screenshot if you beat high to be added to high score list."));
console.log(chalk.cyan("**********************************"));
  
  // End of CLI Application
console.log("")
console.log(chalk.bold.magenta("Thanks for participation.Hope you enjoyed the quiz,leave your suggestion or opinion so that it may be added to the next version of this App..."));
console.log("")
console.log(chalk.magenta.bold("              ***** END ******"));
}

  // Failed to continue to quiz App
else if(userSelection==="n"){
  console.log(chalk.magenta.bold("Oops, you've opted to cancel the App. Thanks for visiting my App.", userName));
} 

else{
  console.log(chalk.bold.red("Invalid input entered.Re run the App."));
}
 } else{
  // Throw an error if the user type incorrect username i.e names with special characters
  console.log(chalk.red.bold("Incorrect name entered!, names must be letters"));
 }

  
}

// Swahili Version Function

function swahiliVersion(){

 // console.log("Swah")

var readlineSync = require('readline-sync');
var chalk = require("chalk");
var regExpression = /^[a-zA-Z]+$/; 

//console.log(chalk.magenta.bold("**** You Know Zulfy App ***"));

console.log("")


// Taking player name
var userName= readlineSync.question("Habari, Jina lako nani: ");
console.log("")

var helloUser = "Habari, Karibu";

if(userName.match(regExpression)){
console.log(chalk.cyan.bold(helloUser),chalk.bold.italic.magenta(userName));
console.log("");
var score = 0;

console.log(chalk.magenta.underline.bold("Kuhusu App"));
console.log(("1. Hii ni App ndogo ambayo ina maswali yanayouhusu maisha na taarifa zangu kiujumla, utajibu maswali kulingana na vile unavyonifahamu😊😊"));
console.log("2. Utapata alama 1 kwa jibu ambalo ni sahihi. ")
console.log("3. Mwishoni utapata taarifa kuhusu matokeo yako ya jumla pamoja na matokeo ya wenye alama nyingi ili uone kama umewazidi wenye alama nyingi. ")
console.log("")
  
console.log(chalk.cyan("********************************"));
console.log(""); 



var userSelection= readlineSync.question("Je ungependa kuendelea na maswali?, andika n kuendelea na h kwa hapana(n/h): ");
console.log("");

if(userSelection === "n"){
console.log(chalk.cyan("********************************"));
console.log(""); 
console.log(chalk.magenta.underline("Anza kujibu maswali."));

  
// Maswali

var questionsList = [
  
   {
 question: "(1) Baba yangu anaitwa nani?:",   
  answers: ["Ismail", "Juma","Issa", "Athman"],  
  answer: "Juma"
    },

  {
 question: "(2) Mimi ni shabiki wa timu gani Ulaya?: " , 
  answers : ["Liverpool","Arsenal","Mainz 05", "Manchester United"],
  answer:"Liverpool"
    },

  {
 question: "(3) Nimemaliza mwaka gani elimu yangu ya Msingi?: " ,
  answers : ["2000", "2003", "2012", "2009"],
  answer: "2009"
    },

  { 
  question: "(4) Je mchezo gani ninaopendelea sana kati ya hii iliyo orodheshwa?: " ,
  answers : ["Mpira wa miguu","Baiskeli","Kuogelea","Masumbwi"],
  answer:"Mpira wa miguu"
    },

  {
 question: "(5) Kwa sasa ninaishi sehemu gani?: " ,  
  answers : ["Dodoma","Mwanza","Dar Es Salaam", "Mtwara"],
  answer:"Dar Es Salaam"
    },
  
  {
    question: "(6) Je, kabila langu ni lipi?: " ,
    answers: ["Mmakonde", "Mndengereko","Mzaramo","Mmakua"],
    answer: "Mmakonde"
  },
  
  {
    question: "(7) Je, nimezaliwa hospitali gani hapa nchini?: ",
    answers: ["Mwananyamala","Muhimbili","Temeke","Amana"],
    answer: "Temeke"
  },

  {
    question: "(8) Je, shule yangu ya msingi inafahamika kwa jina gani?: ",
    answers: ["Kibasila","Unubini","Chang'ombe","Taifa"],
    answer: "Unubini"
  },

  {
    question: "(9) Je, dini yangu ni ipi kati ya hizi?: ",
    answers:["Muislamu","Mkristo","Myahudi","Msabato"],
    answer: "Muislamu"
  },

  {
    question: "(10) Je, nimezaliwa mwaka gani?: " ,
    answers: ["1994","1995","1996","1997"],
    answer: "1997"
  }
]
  
function checkingUserAnswer(question,answers,answer){
var userAnswer = readlineSync.keyInSelect(answers,question);
  
if(answers[userAnswer] === answer){
  console.log(chalk.green.bold("Upo sahihi!"));
  score = score + 1;
} else{
  console.log(chalk.bold.red("Umekosa!"));
  console.log(chalk.green.bold("Jibu sahihi ni ",answer));
}

if( score < 0){
   score = 0;
 }

console.log("Umepata alama", chalk.blue(score));


  console.log(chalk.cyan("**********************************"));
console.log("");
  
}


// Looping through all questions by calling a function several times

for(var i=0; i< questionsList.length; i++){
  currentQuestion = questionsList[i];
  checkingUserAnswer(currentQuestion.question, currentQuestion.answers, currentQuestion.answer);

}

console.log(chalk.blueBright.bold("Umepata jumla ya alama",score));
// Checking User score
var userHighScore = [
  // Scorers database *******
  {
  username: "Msafiri",
  highScore: 10
  },

  {
    username : "Mchumba wangu",
    highScore: 6
  },

  {
    username: userName,
    highScore: score
  }
]

  if(userHighScore[2].highScore > userHighScore[1].highScore){
    console.log(chalk.greenBright.bold("Hongera!",userHighScore[2].username,"umemshinda mwenye alama nyingi"));
console.log(chalk.blueBright.bold("Je wamjua? umemshinda",chalk.cyan.italic.bold(userHighScore[1].username)));
  } else{
    console.log(chalk.red.bold("Umejaribu, alama zako hazitoshi kumshinda bingwa."));
    console.log(chalk.blueBright.bold("Jaribu tena kumjua bingwa wetu😁"));
  }
console.log("");
console.log(chalk.cyan("**********************************"));
console.log("")
console.log(chalk.bold.blueBright("Piga picha ya matokeo yako ya jumla kama utakuwa umemshinda bingwa ili uwekwe kwenye rekodi ya mabingwa."));
console.log(chalk.cyan("**********************************"));
  
  // End of CLI Application
console.log("")
console.log(chalk.bold.magenta("Ahsante kwa kushiriki kwenye app ya maswali.Natumai umefurahi kuelewa zaidi kuhusu mimi,toa maoni au ushauri ili kifanyiwe kazi kwa ajili ya matoleo bora yajayo..."));
console.log("")
console.log(chalk.magenta.bold("              ***** MWISHO ******"));
}

  // Failed to continue to quiz App
else if(userSelection==="h"){
  console.log(chalk.magenta.bold("Umechagua kutoendelea, ahsante kwa kutembelea app yetu", userName));
} 

else{
  console.log(chalk.bold.red("Umeingiza jibu lisilo sahihi.Anzisha upya app"));
}
 } else{
  // Throw an error if the user type incorrect username i.e names with special characters
  console.log(chalk.red.bold("Jina si sahihi, jina linaundwa na herufi pekee"));
 }


  
}



var language=[
  {
  question: "Choose language: ",
  answers : ["English","Swahili"]
}
]


function checkingUserAnswers(question,answers){
  var userSelection = readlineSync.keyInSelect(answers,question);

  if(answers[userSelection] === "English"){
   englishVersion();
  } else if(answers[userSelection] === "Swahili") {
    swahiliVersion()
  }

  else{
    console.log(chalk.red.bold("No language was selected!"));
  var userSelection = readlineSync.keyInSelect(answers,question);

  if(answers[userSelection] === "English"){
   englishVersion();
  } else if(answers[userSelection] === "Swahili") {
    swahiliVersion()
  } else{
    console.log(chalk.red.bold("No language is selected"));
  }
  }
  
}

for(var i = 0; i< language.length; i++){
  checkingUserAnswers(language[i].question, language[i].answers)
}