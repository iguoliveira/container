var secretNum = parseInt(Math.random()*10+1)
var numGuesses = document.getElementById('guessNum')
var guessBtn = document.getElementById('guessBtn')
var oldGuesses = document.getElementById('userGuesses')
var result = document.getElementById('lastResult')
var problemTips = document.getElementById('tip')
var guessRemain = 3
var resetBtn

numGuesses.focus()

function guessCheck(){
    event.preventDefault()
    var userGuesses = numGuesses.value
    if(guessRemain == 3){
        oldGuesses.textContent = 'Guesses you already made: '
    }
    oldGuesses.textContent += userGuesses + ' '
    if(userGuesses == secretNum){
        result.textContent = `You Win! The secret number was ${secretNum}`
        oldGuesses.textContent = ''
        problemTips.textContent = ''
        gameOver()
    } else if(guessRemain == 1){
        result.textContent = `You Lose! The secret number was ${secretNum}`
        oldGuesses.textContent = ''
        problemTips.textContent = ''
        gameOver()
    } else{
        result.textContent = 'Wrong!'
        if(userGuesses < secretNum){
            problemTips.textContent = 'The secret number is higher!'
        } else if(userGuesses > secretNum){
            problemTips.textContent = 'The secret number is lower!'
        }
    }
    guessRemain--
    numGuesses.value = ''
    numGuesses.focus()
}

guessBtn.addEventListener('click',guessCheck)

function gameOver(){
    numGuesses.disabled = true;
    guessBtn.disabled = true;
    resetBtn = document.createElement('button')
    resetBtn.textContent = 'Play Again!'
    document.body.append(resetBtn)
    resetBtn.addEventListener('click',playAgain)
}

function playAgain(){
    guessRemain = 3;
    result.textContent = ''
    resetBtn.parentNode.removeChild(resetBtn)
    numGuesses.disabled = false
    guessBtn.disabled = false
    numGuesses.value = ''
    numGuesses.focus()
    secretNum = parseInt(Math.random()*10+1)
}