let playerScore = 0;
let computerScore = 0;
const rockBtn = document.getElementById('r')
const paperBtn = document.getElementById('p')
const scissorsBtn = document.getElementById('s')
const playerScore_span = document.querySelector('#player-score')
const computerScore_span = document.querySelector('#computer-score')
const result = document.querySelector('.result')
const leaderboard = document.getElementsByClassName('leaderboard')
const body = document.getElementById('bod')
const choice = document.querySelector('.choice')
function computerPlay() {
    const rand = Math.floor(Math.random() * 3)
    if (rand === 0) return "Rock";
    else if (rand === 1) return "Paper";
    else return "Scissors";
}

computerScore_span.textContent = computerScore

// replay function to be called in the endgame function
function replay(){

    const question = document.createElement('div')
    body.appendChild(question)

    question.textContent = 'Do you wanna play again?'
    question.style.textAlign = 'center'

    const answer = document.createElement('div')
    answer.classList.add('answer')
    body.appendChild(answer)

    const yes = document.createElement('div')
    const no = document.createElement('div')

    yes.textContent = 'YES'
    no.textContent = 'NO'
    yes.classList.add('yes')
    no.classList.add('no')
    answer.appendChild(yes)
    answer.appendChild(no)

    yes.addEventListener('click', () => document. location. reload())
    no.addEventListener('click', function() {
        question.textContent = 'Maybe some other time.'
        yes.textContent = ''
        no.textContent = ''
    } )
}

//function to show when the game ends
function endGame(winner) {
    result.textContent = `${winner} Wins!`
    result.classList.add('resultStyle')
    replay()
    rockBtn.setAttribute("disabled", 1);
    paperBtn.setAttribute("disabled", 1);
    scissorsBtn.setAttribute("disabled", 1);
    
}

function win(){
    playerScore++;
    playerScore_span.textContent = playerScore;
    if (playerScore === 5) {
        endGame('Human')
    }
}

function lose(){
    computerScore++;
    computerScore_span.textContent = computerScore;
    if (computerScore === 5) {endGame('Computer')}
}

function draw(){
}

function singleRound(playerSelection) {
    const computerSelection = computerPlay()
    console.log("Player's choice is: " + playerSelection)
    console.log("Computer's choice is: " + computerSelection)

    if (playerSelection === computerSelection) return draw()
    else if (computerSelection === 'Paper' && playerSelection === 'Rock' || computerSelection === 'Rock' && playerSelection === 'Scissors' || 
    computerSelection === 'Scissors' && playerSelection === 'Paper') return lose()
    else return win()
}

function game() {
    rockBtn.addEventListener('click', () => singleRound('Rock'))
    paperBtn.addEventListener('click', () => singleRound('Paper'))
    scissorsBtn.addEventListener('click', () => singleRound('Scissors'))
    }

game()