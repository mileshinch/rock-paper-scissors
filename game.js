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

        console.log("You win! " + humanChoice + " beats " + computerChoice);

        humanScore = humanScore + 1

    } else if (
        (computerChoice == 'rock' && humanChoice == 'scissors')
        ||
        (computerChoice == 'scissors' && humanChoice == 'paper')
        ||
        (computerChoice == 'paper' && humanChoice == 'rock')
    ) {

        console.log("You lose! " + computerChoice + " beats " + humanChoice);

        computerScore = computerScore + 1

    } else {

        console.log("That round was a draw.");
    }
}

// function that plays 5 rounds
function playGame() {

    const rounds = 3;

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

//console.log(playGame());


// create a javascript object which references all buttons
const buttons = document.querySelectorAll("button");

// iterate through the buttons
buttons.forEach((button) => {
    // add event listener for each one
    button.addEventListener("click", () => {
        
        // set humanChoice to the button value
        humanChoice = button.value
        console.log("you picked " + humanChoice)

        // get computer choice
        computerChoice = getComputerChoice()
        console.log("the computer picked " + computerChoice)

        // play a round
        playRound(humanChoice,computerChoice)

        // RUNNING SCORE
        // create references to score spans
        const humanRunningScore = document.querySelector(".humanScore")
        const computerRunningScore = document.querySelector(".computerScore")
        // overwrite the humanScore and computerScore spans
        humanRunningScore.innerText = humanScore
        computerRunningScore.innerText = computerScore


        // COMMENTARY
        // create reference to commentary div
        const commentary = document.querySelector(".commentary")
        // create new div to be appended
        const roundSummary = document.createElement("div")
        // get summary of round
        let text = 'You chose ' + humanChoice + '. The computer chose ' + computerChoice
        // set text of that div
        roundSummary.innerText = text;
        // append to commentary div
        commentary.appendChild(roundSummary)

        
    })
})



    // sets the human choice variable to the appropriate value

    // then it plays a round



