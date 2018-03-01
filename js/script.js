console.log("Rock Paper Scissors")

let symbols = ["Rock", "Paper", "Scissors"],
	computer,
	sum,
	youWin = "You Win! ",
	youLose = "You Lose! ",
	playerScore = 0,
	compScore = 0;


function computerPlay (){
	computer = Math.floor(Math.random() * (2 - 0 +1)) + 0;
	return computer;
}


function playRound (playerSelection, computerSelection){
	// set input to lowercase + Capitalise first letter
	let playerSel = playerSelection.toLowerCase();
	//find number in array and return error if not rock paper or scissor
	playerSel = playerSel.charAt(0).toUpperCase() + playerSel.slice(1);
	playerNum = symbols.indexOf(playerSel);
	if(playerNum === -1){
		return "error";
	}
	//Check the game is not a draw
	if (playerNum === computerSelection) {
		return "This game was a draw"
	}
	//Find sum to identify what has been played
	sum = playerNum + computerSelection;

	//Finds and returns outcome
 	switch(sum){
 		case 1:
	 		if(playerNum>computerSelection){
	 			playerScore++
	 			return youWin + playerSel +" beats " + symbols[computerSelection]
	 		} 
	 		compScore++ 
	 		return youLose + symbols[computerSelection]+ " beats " + playerSelection
	 		break;
	 	case 2:
	 		if(playerNum<computerSelection){
	 			playerScore++
	 			return youWin + playerSel +" beats " + symbols[computerSelection]
	 		} 
	 		compScore++
	 		return youLose + symbols[computerSelection]+ " beats " + playerSelection 
	 		break;
	 	case 3:
	 		if(playerNum>computerSelection){
	 			playerScore++
	 			return youWin + playerSel +" beats " + symbols[computerSelection]
	 		} 
	 		compScore++
	 		return youLose + symbols[computerSelection]+ " beats " + playerSelection 
	 		break;

 	}
}

function game (){
	//log scores
	console.log("Player: " + playerScore + " vs " + "Computer: " + compScore)
	//collect player selection 
	let player= prompt("Rock, Paper or Scissors");
	//Run and log round 
	console.log(playRound(player, computerPlay()))
}
// Keep playing game until 5 games have been played
while ((playerScore+compScore) !== 5){
	game()
}
//Find who is winner
let winner = (playerScore>compScore)? "You win" : "You Lose"
//Log last scores 
console.log("Player: " + playerScore + " vs " + "Computer: " + compScore);
//Announce winner
console.log(winner);

