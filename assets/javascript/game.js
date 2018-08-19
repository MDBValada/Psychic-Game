//initialized settings
    let winsTotalCount = 0;
    let lossesTotalCount = 0;
    let guessesLeft = 9;
    let lettersGuessed = [];
    let aiChoice = null;

// Array containing all possible rng choices.
    let aiOptions = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// formula for the AI to choose a letter
    //let aiGuess = aiOptions[Math.floor(Math.random() * aiOptions.length)];
    function makeAiChoice() {
        aiChoice = aiOptions[Math.floor(Math.random() * aiOptions.length)];
    };

//9 guesses restriction before losing, and to add number of guesses to the visible HTML as the first thing that will be updated for each guess
    function guessesRemaining() {
        document.querySelector("#guessesLeft").innerHTML = "Guesses left: " + guessesLeft;
    };

//function to display the letters player has used this run
    function updateLettersGuessed(){
        document.querySelector("#guessedLetters").innerHTML = "Your Guesses so far: " + lettersGuessed.join(", ");
    };

//creating Function(al) reset to be called either when player runs out of choices, or after winning
    function gameReset(){
        guessesLeft = 9;
        lettersGuessed = [];
        makeAiChoice();
        guessesRemaining();
        updateLettersGuessed();
    
    };

    makeAiChoice();
    guessesRemaining();

//Making the actual Game from this starting position!
    document.onkeyup = function(event) {
        let playerGuess = String.fromCharCode(event.keyCode).toLowerCase();
        let aiCompare = aiOptions.includes(playerGuess)

        if (aiCompare === false){
            alert("You were asked to choose a letter. You can't possibly be a Psychic if you didn't see this warning coming for not following directions!")
            return false;
        }
        else if (aiCompare === true){
            //decriment guesses Left if player choice was incorrect
            guessesLeft--;
            guessesRemaining();
            //update the html to show the player's guessed letter
            lettersGuessed.push(playerGuess);
            updateLettersGuessed();
            //Check to see if the player has won!
            if (guessesLeft > 0){
                if (playerGuess == aiChoice){
                winsTotalCount++;
                document.querySelector("#winsTotal").innerHTML = "Wins: " + winsTotalCount;
                alert("Congratulations, you might indeed be psychic. I did choose the letter " + playerGuess + ".");
                //and reset
                gameReset()
                }
            }
            //Time to give the game a loss situation!
            else if(guessesLeft == 0){
                lossesTotalCount++;
                document.querySelector("#lossesTotal").innerHTML = "Losses: " + lossesTotalCount;
                alert("Sadly, you do not appear to be psychic, as I chose the letter  " + aiChoice + ".");
                //and reset
                gameReset();
            }
        return false;
        }
        else {
            alert("you don't need to be psychic to see this code is broken!");
        }
    }