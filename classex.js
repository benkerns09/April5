console.log("Welcome to Nim!");

// State

var isPlayerOnesTurn = true; //choosing the boolean state here
var pebbles = 16;//advantage of doing it this way is that if I know there are 16 pebbles, I can change printboard function easily

// Actions
function takeTurn() {
    var numPebblesToRemove = parseInt(prompt("How many pebbles do you want to remove?"));

    if (numPebblesToRemove > 0 && numPebblesToRemove < 4) {//&& is and
        pebbles -= numPebblesToRemove;//-= assignment operator means pebbles = pebbles - numPebbles to remove
        isPlayerOnesTurn = !isPlayerOnesTurn;//saying that whoever's turn it is now, just make it the other persons turn
    } else {
        console.log('enter a valid amount');
    }
}

function printBoard() {
    console.log("there are " + pebbles + " pebbles left");
}
// Kick it all off. This is the most intuitive part about the code. Reference functions that haven't been coded yet..way to organize thoughts

while (pebbles > 0) {//using while loop because we know we will need to keep taking turns until the game ends.
    printBoard();
    takeTurn();
}

console.log("game over!");