

for (i = 0; i < 5; i++) {
    
    function computerPlay() {
        const rand = Math.floor(Math.random() * 3)
        console.log(rand)
        if (rand === 0) return "Rock";
        else if (rand === 1) return "Paper";
        else return "Scissors";
    }
    
    computerSelection = computerPlay()
    computerSelection = computerSelection.toLowerCase();
    playerSelection = prompt("Choose: ", 'Rock, Paper or Scissors')
    
    const win = `You win ${playerSelection} beats ${computerSelection}`
    const lose = `You lose ${computerSelection} beats ${playerSelection}`
    const draw = "It's a draw!"
    
    
    function singleRound(playerSelection,computerSelection){
        playerSelection = playerSelection.toLowerCase();
        if (playerSelection === computerSelection) return draw
        else if (computerSelection === 'paper' &&playerSelection === 'rock') return lose
        else if (computerSelection === 'rock' && playerSelection === 'scissors') return lose
        else if (computerSelection === 'scissors' && playerSelection === 'paper') return lose
        else return win;
    }
    
    console.log(singleRound(playerSelection, computerSelection))

}

