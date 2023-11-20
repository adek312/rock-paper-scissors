// Zrobic funkcje ktora liczy punkty i rundy do 5

let computerscore = 0;
let playerscore = 0;

let options = ['rock', 'paper', 'scissors'];
let randomize = options[Math.floor(Math.random() * options.length)];

function getComputerChoice(randomize){
    return randomize;
}

function playRound(player, computer){
    if(player === computer){
        console.log("Tie")
    }
    else if(computer === "rock" && player === "scissors"){
        console.log("Rock beats scissors. Computer Wins.");
    }
    else if(computer === "scissors" && player === "paper"){
        console.log("Scissors beats paper. Computer Wins.");
    }
    else if(computer === "paper" && player === "rock"){
        console.log("Paper beats rock. Computer Wins.");
    }
    else if(player === "rock" && computer === "scissors"){
        console.log("Rock beats scissors. Player Wins.");
    }
    else if(player === "scissors" && computer === "paper"){
        console.log("Scissors beats paper. Player Wins.");
    }
    else if(player === "paper" && computer === "rock"){
        console.log("Paper beats rock. Player Wins.");
    }
}



let playerSelection = "";

while(true){
    playerSelection = prompt("Choose: Rock, paper or scissors: ");
    playerSelection.toLowerCase();
    if(playerSelection === "scissors" || playerSelection === "rock" || playerSelection === "paper"){
        break;
    }
}

let computerSelection = getComputerChoice(randomize);
console.log(computerSelection + " Computer");
console.log(playerSelection + " Player");