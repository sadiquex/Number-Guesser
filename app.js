/*
GAME FUNCTION
- Player must guess a number between a min and max
- Player gets a certain amount of guesses
- Notify player of guesses remaining
- Notify the player of the corrext answer is lose
- Let player choose to play again
*/

// Game values
let min = 1,
    max = 10,
    winningNum = 2,
    guessesLeft = 3;


// ui elements
const game = document.querySelector('#game'),
    minNum = document.querySelector('.min-num'),
    maxNum = document.querySelector('.max-num'),
    guessBtn = document.querySelector('#guess-btn'),
    guessInput = document.querySelector('#guess-input'),
    message = document.querySelector('.message');


// Assign ui min and max
minNum.textContent = min;
maxNum.textContent = max;

// listen for guess
guessBtn.addEventListener('click', function(){
    let guess = parseInt(guessInput.value);

    // validate input
    if(isNaN(guess) || guess < min || guess > max){
        setMessage(`Enter a number between ${min} and ${max}`, 'red');        
    }

    // check if won
    if (guess === winningNum){
        // disable input
        guessInput.disaled = true;
        // change border color
        guessInput.style.borderColor = 'green';
        // set message
        setMessage(`${winningNum} is correct! YOU WIN`, 'green');

    }else{
        // wrong number
        guessesLeft = guessesLeft - 1;

        if(guessesLeft === 0){
            // game over - lost

            // disabled input
            guessInput.disaled = true;
            // change border color
            guessInput.style.borderColor = 'red';
            // set message
            setMessage(`Game over, YOU LOST,the correct number was ${winningNum}`, 'red');
            

        }else{
            // game continues - answer wrong
            guessInput.style.borderColor = 'red';

            // clear input
            guessInput.value = '';
            
            // tell user what's the wrong number
            setMessage(`${guess} is not correct, ${guessesLeft} guesses left`);
        }


    }
});

// Set Message
function setMessage(msg, color){
    message.style.color = color;
    message.textContent = msg;
}
    


