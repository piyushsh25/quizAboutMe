var readlinesync= require("readline-sync");
var score=0;

function play(question,answer){
var userQuestion= readlinesync.question(question);

if (userQuestion ==answer){
  console.log("Correct");
  score++;
  console.log("Socre: ",score)
}else{
  console.log("Nops !!");
  score--;
  console.log("Score: ",score)
}
}

play("My Name ","Piyush");
play("Age ","19");
play("from? ","sikkim");
play("fav place ","bangalore");
play("fav programming language","javascript");

