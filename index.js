function getComputerChoice(){
    let options = ['rock', 'paper', 'scissors'];
    let randomize = options[Math.floor(Math.random() * options.length)];
    return randomize;
}

function playRound(player, computer){
    if(player === computer){
        console.log("Tie")
        playerScore++;
        computerScore++;
    }
    else if(computer === "rock" && player === "scissors"){
        console.log("Rock beats scissors. Computer Wins.");
        computerScore++;
    }
    else if(computer === "scissors" && player === "paper"){
        console.log("Scissors beats paper. Computer Wins.");
        computerScore++;
    }
    else if(computer === "paper" && player === "rock"){
        console.log("Paper beats rock. Computer Wins.");
        computerScore++;
    }
    else if(player === "rock" && computer === "scissors"){
        console.log("Rock beats scissors. Player Wins.");
        playerScore++;
    }
    else if(player === "scissors" && computer === "paper"){
        console.log("Scissors beats paper. Player Wins.");
        playerScore++;
    }
    else if(player === "paper" && computer === "rock"){
        console.log("Paper beats rock. Player Wins.");
        playerScore++;
    }
}

function getPlayerChoice(){
    while(true){
        let playerSelection = prompt("Choose: Rock, paper or scissors: ");
        playerSelection = playerSelection.toLowerCase();
        if(playerSelection === "scissors" || playerSelection === "rock" || playerSelection === "paper"){
            return playerSelection;
        }
    }
}

let playerScore = 0;
let computerScore = 0;

function game(){
    for (let i = 0; i<5; i++)
    {
        playerSelection = getPlayerChoice();
        console.log("Player: " + playerSelection);
        computerSelection = getComputerChoice();
        console.log("Computer: " + computerSelection)
        playRound(playerSelection, computerSelection);
    }
    console.log("Player score: " + playerScore);
    console.log("Computer score: " + computerScore);
    if(playerScore===computerScore){
        console.log("Tie");
    }
    else if(playerScore>computerScore){
        console.log("Player wins");
    }    
    else{
        console.log("Computer wins");
    }
}

game();