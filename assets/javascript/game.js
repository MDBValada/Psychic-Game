//initialized settings
    let winsTotal = 0;
    let lossesTotal = 0;
    let guessesLeft = 9;
    let lettersGuessed = [];
    let aiChoice = null;

// Array containing all possible rng choices.
    let aiOptions = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// formula for the AI to choose a letter
    //let aiGuess = aiOptions[Math.floor(Math.random() * aiOptions.length)];
    function makeAiChoice() {
        lettersGuessed = aiOptions[Math.floor(Math.random() * aiOptions.length)];
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