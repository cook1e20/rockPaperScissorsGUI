console.log("Rock Paper Scissors")


const container = document.querySelector('#container')
const instructions = document.createElement("div");
	instructions.classList.add('content')
	instructions.textContent ="Select Rock, Paper or Scissors to play"

const rock = document.createElement('button');
	rock.textContent = "Rock";
	rock.setAttribute('id', 'rock')
const paper = document.createElement('button');
	paper.textContent = "Paper";
	paper.setAttribute('id', 'paper')
const scissors = document.createElement('button')
	scissors.textContent ="Scissors";
	scissors.setAttribute('id', 'scissors')

console.log(instructions)
container.appendChild(instructions);
container.appendChild(rock)
container.appendChild(paper)
container.appendChild(scissors)



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



let btn = document.querySelectorAll('button');
//log scores
const score = document.createElement("div");
const commentary = document.createElement("div");
	score.textContent ="Player: " + playerScore + " vs " + "Computer: " + compScore;
	container.insertBefore(score, rock);


btn.forEach((button) => { 
	button.addEventListener("click", function(e){
	let player = button.id;

	//Run and log round

	commentary.textContent = playRound(player, computerPlay())
	container.insertBefore(commentary, rock)

	if (playerScore === 5){
		score.textContent = "Player Wins you Rock!"
		rock.disabled = true;
		paper.disabled = true;
		scissors.disabled = true;
		} else if (compScore === 5){
		score.textContent = "Computer Wins you Suck!"
		rock.disabled = true;
		paper.disabled = true;
		scissors.disabled = true;	
		} else {score.textContent ="Player: " + playerScore + " vs " + "Computer: " + compScore}


		
		

container.insertBefore(score, commentary)
})
})


