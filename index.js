function getComputerChoice(){
    let options = ['rock', 'paper', 'scissors'];
    let randomize = options[Math.floor(Math.random() * options.length)];
    return randomize;
}

function playRound(player, computer){
    let playerScore = document.getElementById("playerScore");
    let computerScore = document.getElementById("computerScore");
    result.innerHTML = "";    
    
    if(pScore === 5 && cScore === 5){
        const TIE = document.createTextNode("TIE");
        result.appendChild(TIE);
    }
    else if (cScore === 5)
    {
        const COMPUTERWIN = document.createTextNode("COMPUTER WINS");
        result.appendChild(COMPUTERWIN)
    }
    else if (pScore === 5){
        const PLAYERWIN = document.createTextNode("PLAYER WINS");
        result.appendChild(PLAYERWIN);
    }
    else{
        if(player === computer){
            let tie = document.createTextNode("Tie");
            result.appendChild(tie);
            pScore++;
            cScore++;
            playerScore.innerHTML = pScore;
            computerScore.innerHTML = cScore;
        }
        else if(computer === "rock" && player === "scissors"){
            let comWinRockPaper = document.createTextNode("Rock beats scissors. Computer Wins.");
            result.appendChild(comWinRockPaper);
            cScore++;
            computerScore.innerHTML = cScore;
        }
        else if(computer === "scissors" && player === "paper"){
            let comWinScissorsPaper = document.createTextNode("Scissors beats paper. Computer Wins.");
            result.appendChild(comWinScissorsPaper);
            cScore++;
            computerScore.innerHTML = cScore;
        }
        else if(computer === "paper" && player === "rock"){
            let comWinPaperRock = document.createTextNode("Paper beats rock. Computer Wins.");
            result.appendChild(comWinPaperRock);
            cScore++;
            computerScore.innerHTML = cScore;
        }
        else if(player === "rock" && computer === "scissors"){
            let plWinRockScissors = document.createTextNode("Rock beats scissors. Player Wins.");
            result.appendChild(plWinRockScissors);
            pScore++;
            playerScore.innerHTML = pScore;

        }
        else if(player === "scissors" && computer === "paper"){
            let plWinScissorsPaper = document.createTextNode("Scissors beats paper. Player Wins.");
            result.appendChild(plWinScissorsPaper);
            pScore++;
            playerScore.innerHTML = pScore;

        }
        else if(player === "paper" && computer === "rock"){
            let plWinPaperRock = document.createTextNode("Paper beats rock. Player Wins.");
            result.appendChild(plWinPaperRock);
            pScore++;
            playerScore.innerHTML = pScore;

        }
    }
}

let result = document.getElementById("result");
let pScore = 0;
let cScore = 0;

let playerSelection = "";
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

rock.addEventListener("click", function(){
    playerSelection = "rock";
    let computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);

});

paper.addEventListener("click", function(){
    playerSelection = "paper";
    let computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
});

scissors.addEventListener("click", function(){
    playerSelection = "scissors";
    let computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);

});
























// function game(){
//     for (let i = 0; i<5; i++)
//     {
//         playerSelection = getPlayerChoice();
//         console.log("Player: " + playerSelection);
//         computerSelection = getComputerChoice();
//         console.log("Computer: " + computerSelection)
//         playRound(playerSelection, computerSelection);
//     }
//     console.log("Player score: " + playerScore);
//     console.log("Computer score: " + computerScore);
//     if(playerScore===computerScore){
//         console.log("Tie");
//     }
//     else if(playerScore>computerScore){
//         console.log("Player wins");
//     }    
//     else{
//         console.log("Computer wins");
//     }
// } 

// game();