/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

// 0 = Player 1
// 1 = Player 2 
var currentPlayer = 0
var currentScore = 0

document.querySelector('button.btn-roll').addEventListener('click', (event) => {
    var number = Math.floor(Math.random()*6 + 1)

    document.querySelector('img.dice').src = "dice-" + number.toString() + ".png"
    
    if(number != 1) {
        currentScore = currentScore + number
        document.querySelector('#current-' + currentPlayer.toString()).textContent = currentScore.toString()
    }
    else {
        currentScore = 0
        document.querySelector('#current-' + currentPlayer.toString()).textContent = currentScore.toString()
        document.querySelector('div.player-' + currentPlayer.toString() + '-panel').className = 'player-' + currentPlayer.toString() + '-panel'
        currentPlayer = (currentPlayer+1)%2
        document.querySelector('div.player-' + currentPlayer.toString() + '-panel').className = 'player-' + currentPlayer.toString() + '-panel active'
    }
})

document.querySelector('button.btn-hold').addEventListener('click', (event) => {
    var globalScore = parseInt(document.querySelector('#score-' + currentPlayer.toString()).textContent)

    globalScore = globalScore + currentScore

    document.querySelector('#score-' + currentPlayer.toString()).textContent = globalScore.toString()
    currentScore = 0
    document.querySelector('#current-' + currentPlayer.toString()).textContent = currentScore.toString()

    document.querySelector('div.player-' + currentPlayer.toString() + '-panel').className = 'player-' + currentPlayer.toString() + '-panel'
    currentPlayer = (currentPlayer+1)%2
    document.querySelector('div.player-' + currentPlayer.toString() + '-panel').className = 'player-' + currentPlayer.toString() + '-panel active'
})