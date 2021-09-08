 const chalk = require('chalk');
var readlineSync=require('readline-sync')

var score=0;


var highScores=[
  {
    name:"Swetha",
    key:7
  },

  {
    name:"jyothika",
    key:6
  },
  {
    name:"Vinay",
    key:5
  }
];


var  bollywoodQuestions=[
  {
    question:
    "1.In Om Shanti Om, what does Deepika Padukone's character Shantipriya do? : "+chalk.redBright("\na)Actress b)Singer ") ,
    answer:"a",
    correctanswer:"Actress"
  },


  {
    question:"2. What is the name of the lead female character in Dilwale Dulhania Le Jayenge? : "+chalk.redBright("\n a)Simran b)Sunita "),
    answer:"a",
    correctanswer:"Simran"
  },
  {
    question:"3. Finish the quote from Deewar: Mere paas _____. "+chalk.redBright("\na)Baap hai  b)Maa hai "),
    answer:"b",
    correctanswer:"Maa hai"
  },

  {
    question:"4. In Dear Zindagi, what does Shah Rukh Khan's character, Dr Jehangir Khan, do? :" +chalk.redBright("\n a)Engineer b)therapist "),
 answer:"b",
 correctanswer:"therapist",

  },
  {
    question:"5. Finish the quote from Om Shanti Om: Ek chutki sindoor ki keemat, tum kya jaano _____? "+chalk.redBright("\na) Ramesh Babu b)Mahesh Babu "),
    answer:"a",
    correctanswer:"Ramesh Babu"
  },
  {
    question:"6. What is the name of Sholay' s iconic villain?: "+chalk.redBright("\na)kalia b)Gabbar Singh "),
    answer:"b",
    correctanswer:"Gabbar Singh"
  },
  {
    question:"7. The story of Kabhi Khushi Kabhie Gham revolves around the trials and tribulations of which family?: "+chalk.redBright("\na)The Malhotras b)The Raichands "),
    answer:"b",
    correctanswer:"The Raichands"
  },
  {
    question:"8. In Hera Pheri, what was Paresh Rawal's character called?: "+chalk.redBright("\na)Baburao Ganpatrao Apte  b)Raju "),
    answer:"a",
    correctanswer:"Baburao Ganpatrao Apte"
  },
  {
    question:"9. Which movie is this popular line from:Dosti ka ek usool hai madam - no sorry, no thank you.: "+chalk.redBright("\na)Kuch Kuch Hota Hai  b)Maine Pyar Kiya "),
answer:"b",
correctanswer:"Maine Pyar Kiya"
  },
  {
    question:"10. In 3 Idiots, what is Rancho's real name?: "
    +chalk.redBright("\na)Ranchhoddas Shamaldas  b)Phunsukh Wangdu "),
    answer:"b",
    correctanswer:"Phunsukh Wangdu"
  }
  
];

var userName = readlineSync.question(chalk.redBright('Hi there! 🙂 What is your name?: '));

console.log(chalk.cyan.bgRedBright("\nWelcome to Bollywood Quiz," + userName.charAt(0).toUpperCase() + userName.slice(1)));
console.log(" ")
console.log(chalk.magenta("Goodluck! Have Fun!😉 "));

console.log(chalk.yellowBright("let's plays!!"));
console.log(" ")


function questions(question,answer,correctanswer){
  var userAnswer=readlineSync.question(chalk.cyan(question));
  console.log(chalk.magentaBright("you entered: '")+userAnswer+"'");


if(userAnswer.toLowerCase()===answer.toLowerCase()){
  score++;
  console.log(chalk.green("Right answer!!👍"));
  console.log(chalk.yellowBright("your Current Score: "+score));
  
}
else{
  console.log(chalk.red("Wrong answer!!👎"));
  console.log(chalk.blue("Correct answer is:",correctanswer));
   console.log(chalk.yellowBright("Your Current Score: "+score));
}
}

function userScore(){ 
  if(score!==0){
console.log(chalk.blue.greenBright("CONGRATULATIONS Great play!! Your Final Score: "+score))

  }else{
    console.log(chalk.magenta("Cool Game Try Again!!"))
  }
}
function yourPlay(){
for(var i=0;i<bollywoodQuestions.length;i++){
questions(bollywoodQuestions[i].question,bollywoodQuestions[i].answer,bollywoodQuestions[i].correctanswer)
console.log(" ")
}

}

function otherPlayerScores(name,key){
  console.log(" ")
  console.log(chalk.magenta.bgGreenBright("Checkout the scores of other player👨‍👦‍👦"))
  for(var i=0;i<highScores.length;i++){
    console.log(chalk.cyanBright(highScores[i].name),highScores[i].key)
    
  }
}

function maxScore(name,key){
  var maxScore=0;
  for(var i=0;i<highScores.length;i++){
    if(highScores[i].key>maxScore){
      maxScore=highScores[i].key;
    } 
  }
 
  if(score>maxScore)
 
    console.log(chalk.red.bgYellowBright("WOW!! CONGRATULATIONS AGAIN!!🎉 YOU ARE THE TOP SCORER!! PING ME WITH THE SCREENSHOT OF YOUR GAME IF U WANT TO UPDATE UR SCORE ON THE LEADERBOARD"))
  
}

yourPlay();
userScore();
otherPlayerScores();
maxScore();
