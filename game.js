// function that generates the computer's choice
function getComputerChoice() {
    let randomNumber = Math.random()
    if (randomNumber < 0.333) {
        return 'rock';
    } else if (randomNumber > 0.666) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

// function that plays a round and increments the scores accordingly
function playRound(humanChoice,computerChoice) {
    if (
        (humanChoice == 'rock' && computerChoice == 'scissors')
        ||
        (humanChoice == 'scissors' && computerChoice == 'paper')
        ||
        (humanChoice == 'paper' && computerChoice == 'rock')
        ) {

        alert("You win! " + humanChoice + " beats " + computerChoice);
        console.log("You win! " + humanChoice + " beats " + computerChoice);

        humanScore = humanScore + 1

    } else if (
        (computerChoice == 'rock' && humanChoice == 'scissors')
        ||
        (computerChoice == 'scissors' && humanChoice == 'paper')
        ||
        (computerChoice == 'paper' && humanChoice == 'rock')
    ) {

        alert("You lose! " + computerChoice + " beats " + humanChoice);
        console.log("You lose! " + computerChoice + " beats " + humanChoice);

        computerScore = computerScore + 1

    } else {

        alert("That round was a draw.");
        console.log("That round was a draw.");
    }
}

// function that plays 5 rounds
function playGame() {

    const rounds = 5;

    for (let i = 0; i < rounds; i++) {
        console.log(humanScore);
        console.log(computerScore);

        computerChoice = getComputerChoice()
        humanChoice = prompt("What is your choice?",)

        console.log(humanChoice);
        console.log(computerChoice);
        
        playRound(humanChoice,computerChoice);

        console.log(humanScore);
        console.log(computerScore);
    }

    if (humanScore > computerScore) {
        alert("You won the game! The score was " + humanScore + " - " + computerScore);
        console.log("You won the game! The score was " + humanScore + " - " + computerScore);
    } else if (humanScore < computerScore) {
        alert("You lost the game. The score was " + humanScore + " - " + computerScore);
        console.log("You lost the game. The score was " + humanScore + " - " + computerScore);
    } else {
        alert("The game was a draw.");
        console.log("The game was a draw.");
    }
}

// initiate scores at 0
let humanScore = 0;
let computerScore = 0;

// declare choice variables
let computerChoice;
let humanChoice;

console.log(playGame());

