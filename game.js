console.log("Hello Worlds")

console.log(Math.random())

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

console.log(getComputerChoice());