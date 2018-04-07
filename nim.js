console.log("Let The NIM Games Begin!!!!");
console.log("There are 16 rocks in the pile.");
console.log("Each player can remove up to 3 rocks on their turn.");
console.log("The player to remove the last rock wins.");
console.log("Round 1. Fight!")
var rocks = 16;
var playerTurn = "1";//this could be player one or player two
var count = 0;
var round = 1;
var prevPlay = 0;
function subRocks(sub) {
if (sub <= rocks) {
rocks = rocks - sub;
console.log("Player "+playerTurn+" removed "+sub+" rocks. There are "+rocks+" left!");
prevPlay = sub;
}
else {
console.log("There's not that many rocks left.")
}
}

function playerInput() {
var numPrompt;
if (playerTurn == 1){
var numPrompt = parseInt(prompt("There are " +rocks+ " rocks left. Your turn Player "+playerTurn+". How many rocks will you remove: 1, 2 or 3?"));
if (numPrompt <= 3) {
count += 1;
subRocks(numPrompt);
if (rocks !== 0) {
if (playerTurn == 1) {
playerTurn = 2;
}
else {
playerTurn = 1;
}
}
if (count > 0) {
if ((count % 2) == 0){
round += 1;
console.log("Round " + round + ". Fight!");
}
}
}
else {
console.log("Illegal move!");
}
}
else {
var compRemove = 4 - prevPlay;
subRocks(compRemove);
count += 1;
if (rocks !== 0) {
if (playerTurn == 1) {
playerTurn = 2;
}
else {
playerTurn = 1;
}
}
if (count > 0) {
if ((count % 2) == 0){
round += 1;
console.log("Round " + round + ". Fight!");
}
}
}
}


function checkVictory(){
if (rocks == 0){
if (playerTurn == 1) {
console.log("Player 1 Wins!");
return "Player 1 Wins!";
}
else {
console.log("Player 2 Wins!");
return "Player 2 Wins!";
}
}
else {
return "The fight continues";
}
}

while (checkVictory()=="The fight continues") {
playerInput();
}