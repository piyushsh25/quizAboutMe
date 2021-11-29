var readlinesync= require("readline-sync");
var score=0;

function play(question,answer){
var userQuestion= readlinesync.question(question);

if (userQuestion ==answer){
  console.log("Correct");
  score++;
  console.log("Socre: ",score)
}else{
  console.log("Nops try Again");
  score--;
  console.log("Socre: ",score)
}
}

play("My Name","Piyush");
play("Age","19");
play("from","sikkim");
play("WOWOW","heheh");
