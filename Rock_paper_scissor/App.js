const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');
let userChoice;
let computerChoice;
let result;

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generatedComputerChoice();
    getResult();
}));

function generatedComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1;

    switch (randomNumber) {
        case 1:
            computerChoice = 'Rock';
            break;
        case 2:
            computerChoice = 'Scissors';
            break;
        case 3:
            computerChoice = 'Paper';
            break;
        default:
            break;
    }

    computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult() {
    if (computerChoice === userChoice) {
        result = 'It\'s a Draw!';
    } else if (
        (computerChoice === 'Rock' && userChoice === 'Paper') ||
        (computerChoice === 'Paper' && userChoice === 'Scissors') ||
        (computerChoice === 'Scissors' && userChoice === 'Rock')
    ) {
        result = 'You Won!';
    } else {
        result = 'You Lost!';
    }

    resultDisplay.innerHTML = result;
}
