// Hangman Game - Soccer Style

// Game Object

let game = {
    // Function for when user clicks on a character and checks against the correct phrase
    checkCharacter: function () {
        character.onclick = function () {
            let userPick = (this.innerHTML);
            this.setAttribute('class', 'active');
            this.onclick = null;
            for (var i = 0; i < phrase.length; i++) {
                if (phrase[i] === userPick) {
                    userGuesses[i].innerHTML = userPick;
                    points++;
                    counter++;
                    view.updateStats();
                }
            }
            // incorrect guesses
            let j = (phrase.indexOf(userPick));
            if (j === -1) {
                numberOfGuesses--;
                points--;
                view.updateStats();
            }
            // solved phrase
            for (var i = 0; i < userGuesses.length; i++) {
                if (counter + space === userGuesses.length) {
                    points += 10;
                    round++;
                    view.alertWin();
                    view.updateStats();
                }
            }
            // unsolved phrases after user uses all guesses available
            if (numberOfGuesses == 0) {
                points -= 10;
                lives--;
                view.alertLoss();
                view.updateStats();
            }
            // points bonus for completing 5 rounds
            if (round == 6 && bonus == false) {
                points += 25;
                view.alertBonus25();
            }
            // setting the bonus to false so bonus points do not keep being given
            if (round == 7) {
                bonus = false;
            }
            // points and extra life bonus after completing 10 rounds of the game
            if (round == 11 && bonus == false) {
                points += 50;
                lives++;
                view.alertBonus50();
            }
            if (round == 12) {
                bonus = false;
            }
            if (round == 16 && bonus == false) {
                points += 100;
                view.alertBonus100();
            }
            if (round == 17) {
                bonus = false;
            }
            if (round == 21 && bonus == false) {
                points += 150;
                lives++;
                view.alertBonus150();
            }
            // Game over if user runs out of lives
            if (lives == 0) {
                view.alertGameOver();
            }
        }
    },

    // Function to start playing of a round
    startRound: function () {
        chosenPhrase = phraseArray[Math.floor(Math.random() * phraseArray.length)];
        //phrase = phrase.replace(/\s/g, "-");
        phrase = chosenPhrase.phrase;
        category = chosenPhrase.category;
        hint = chosenPhrase.hint;
        //console.log(chosenPhrase.phrase);
        //console.log(chosenPhrase.category);
        //console.log(chosenPhrase.hint)
        view.alphaNumericButtons();
        userGuesses = [];
        numberOfGuesses = 5;
        counter = 0;
        space = 0;
        bonus = false;
        view.displayCategory();
        view.displayPhrase();
        view.updateStats();
    },

    // Function to Move the contents of usedPhrases array back into phraseArray so that a new game can begin.
    clearArrays: function () {
        phraseArray.push(...usedPhrases);
        usedPhrases = [];
    },

    // Reset Game to orginal settings
    resetGame: function () {
        view.clearGameArea();
        this.clearArrays();
        this.startRound();
        points = 0;
        lives = 3;
        round = 1;
        view.updateStats();
    }

};

// All of the Data to be used for the game

// Variables 
let numberOfGuesses;
let phrase;
let category;
let hint;
let character;
let userGuess;
let userGuesses = [];
let chosenPhrase = [];
let usedPhrases = [];
let space;
let lives = 3;
let counter;
let points = 0;
let bonus = false;
let round = 1;

// Letters and Numbers
const alphaNumeric = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
    "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// array of Soccer phrases to choose from
let phraseArray = [
    {
        phrase: "MESSI",
        category: "PLAYS FOR BARCELONA",
        hint: "BEST PLAYER IN OUR GENERATION"
    },
    {
        phrase: "RONALDO",
        category: "PLAYS FOR REAL MADRID",
        hint: "PORTUGAL'S STRICKER"
    },
    {
        phrase: "HENRY",
        category: "PLAYED FOR ARESENAL",
        hint: "BEST FORWARD IN ARSENAL HISTORY"
    },
    {
        phrase: "IBRAHIMAVIC",
        category: "PLAYS FOR SWEDEN",
        hint: "BEST FORWARD IN ARSENAL HISTORY"
    },
    {
        phrase: "BECKHAM",
        category: "PLAYED FOR ENGLAND",
        hint: "BEND IT LIKE...?"
    },
    {
        phrase: "GERMANY",
        category: "WON 2014 WORLD CUP",
        hint: "FLAG COLOR IS RED, YELLOW, BLACK"
    },
    {
        phrase: "RUSSIA",
        category: "2018 WORLD CUP IS WHERE?",
        hint: "PUTIN"
    },
    {
        phrase: "4 YEARS",
        category: "WORLDCUP IS EVERY...",
        hint: "JUST LIKE THE OMLYMPICS"
    },
    // {
    //     phrase: "HENRY",
    //     category: "ARSENAL",
    //     hint: "BEST FORWARD IN ARSENAL HISTORY"
    // },
    // {
    //     phrase: "HENRY",
    //     category: "ARSENAL",
    //     hint: "BEST FORWARD IN ARSENAL HISTORY"
    // },
    // {
    //     phrase: "HENRY",
    //     category: "ARSENAL",
    //     hint: "BEST FORWARD IN ARSENAL HISTORY"
    // },
    // {
    //     phrase: "HENRY",
    //     category: "ARSENAL",
    //     hint: "BEST FORWARD IN ARSENAL HISTORY"
    // },
    // {
    //     phrase: "HENRY",
    //     category: "ARSENAL",
    //     hint: "BEST FORWARD IN ARSENAL HISTORY"
    // },
    // {
    //     phrase: "HENRY",
    //     category: "ARSENAL",
    //     hint: "BEST FORWARD IN ARSENAL HISTORY"
    // },
    // {
    //     phrase: "HENRY",
    //     category: "ARSENAL",
    //     hint: "BEST FORWARD IN ARSENAL HISTORY"
    // },
    // {
    //     phrase: "HENRY",
    //     category: "ARSENAL",
    //     hint: "BEST FORWARD IN ARSENAL HISTORY"
    // },
    // {
    //     phrase: "HENRY",
    //     category: "ARSENAL",
    //     hint: "BEST FORWARD IN ARSENAL HISTORY"
    // },
    // {
    //     phrase: "HENRY",
    //     category: "ARSENAL",
    //     hint: "BEST FORWARD IN ARSENAL HISTORY"
    // },
    // {
    //     phrase: "HENRY",
    //     category: "ARSENAL",
    //     hint: "BEST FORWARD IN ARSENAL HISTORY"
    // },
    // {
    //     phrase: "HENRY",
    //     category: "ARSENAL",
    //     hint: "BEST FORWARD IN ARSENAL HISTORY"
    // },
    // {
    //     phrase: "HENRY",
    //     category: "ARSENAL",
    //     hint: "BEST FORWARD IN ARSENAL HISTORY"
    // },
    // {
    //     phrase: "HENRY",
    //     category: "ARSENAL",
    //     hint: "BEST FORWARD IN ARSENAL HISTORY"
    // },
    // {
    //     phrase: "HENRY",
    //     category: "ARSENAL",
    //     hint: "BEST FORWARD IN ARSENAL HISTORY"
    // },
    // {
    //     phrase: "HENRY",
    //     category: "ARSENAL",
    //     hint: "BEST FORWARD IN ARSENAL HISTORY"
    // },
];

// All of the view functions to be used in the game

// On Page Load
window.onload = () => {

    game.startRound();

};

let hintButton = document.getElementById("button_reveal_hint");
let hintRevealed = false;

// View object
let view = {

    // Function to Create AlphaNumeric Buttons on screen
    alphaNumericButtons: function () {
        characterButtons = document.getElementById('alphanumeric-buttons');
        characters = document.createElement('ul');

        for (var i = 0; i < alphaNumeric.length; i++) {
            characters.id = 'alphaNumeric';
            character = document.createElement('li');
            character.id = 'character';
            character.innerHTML = alphaNumeric[i];
            game.checkCharacter();
            characterButtons.appendChild(characters);
            characters.appendChild(character);
        }
    },

    // Function to Display Phrase for that Round
    displayPhrase: function () {
        phraseDisplay = document.getElementById('phrase');
        correct = document.createElement('ul');

        for (var i = 0; i < phrase.length; i++) {
            correct.setAttribute('id', 'the-phrase');
            userGuess = document.createElement('li');
            userGuess.setAttribute('class', 'user-guess');
            // how to do will spaces and dashes in phrases
            if (phrase[i] === "-") {
                userGuess.innerHTML = "-";
                space++;
            } else if (phrase[i] === " ") {
                userGuess.innerHTML = " ";
                space++;
            } else {
                userGuess.innerHTML = "_";
            }
            // add user guesses to array to check with phrase
            userGuesses.push(userGuess);
            // append to the parent element to display phrase
            phraseDisplay.appendChild(correct);
            correct.appendChild(userGuess);
        }
    },

    // Update the stats
    updateStats: function () {
        let statsHtml =
            "<ul>" +
            "<li>ROUND " + round + " OF 25</li>" +
            "<li>LIVES " + lives + "</li>" +
            "<li>POINTS " + points + "</li>" +
            "<li>GUESSES LEFT " + numberOfGuesses + "</li>" +
            "<ul>";

        document.querySelector("#stats-bar").innerHTML = statsHtml;
    },

    // Display the Category above the Phrase
    displayCategory: function () {
        let categoryHtml = "<h1>" + category + "</h1>";
        document.querySelector("#category").innerHTML = categoryHtml;
    },

    // Reveal Hint costing User 1 guess
    displayHint: function () {
        if (hintRevealed == false) {
            let hintText = "<h1>" + hint + "</h1>";
            document.querySelector("#hint_area").innerHTML = hintText;
            numberOfGuesses--;
            points -= 5;
            this.updateStats();
            hintButton.disabled = true;
        } else {
            hintButton.disabled = false;
            hintButton.setAttribute('class', '');
        }
    },

    // Reset game area between rounds
    clearGameArea: function () {
        document.getElementById('hint_area').innerHTML = "";
        hintRevealed = false;
        hintButton.setAttribute('class', '');
        hintButton.disabled = false;
        document.getElementById('phrase').innerHTML = "";
        document.getElementById('alphanumeric-buttons').innerHTML = "";
    },

    // ALERTS
    alertWin: function () {
        alert("ONTO THE NEXT ROUND! THE PHRASE WAS: " + phrase + ". " + "YOU HAVE " + points + " POINTS. " + "YOU KNOW YOUR SOCCER FACTS.");
        this.clearGameArea();
        usedPhrases.push(chosenPhrase);
        phraseArray.splice(phraseArray.indexOf(chosenPhrase), 1);
        game.startRound();
    },

    alertBonus25: function () {
        alert("YOU'VE REACHED ROUND 6 AND EARNED A 25 POINT BONUS! YOU NOW HAVE " + points + " POINTS.");
        bonus = true;
        this.updateStats();
    },

    alertBonus50: function () {
        alert("YOU'VE REACHED ROUND 11 AND EARNED A 50 POINT BONUS AND A EXTRA LIFE! YOU NOW HAVE " + points + " POINTS.");
        bonus = true;
        this.updateStats();
    },

    alertBonus100: function () {
        alert("YOU'VE REACHED ROUND 16 AND EARNED A 100 POINT BONUS! YOU NOW HAVE " + points + " POINTS.");
        bonus = true;
        this.updateStats();
    },

    alertBonus150: function () {
        alert("YOU'VE REACHED ROUND 21 AND EARNED A 150 POINT BONUS AND AN EXTRA LIFE! YOU NOW HAVE " + points + " POINTS.");
        bonus = true;
        this.updateStats();
    },

    alertLoss: function () {
        alert("YOU LOSE! THE PHRASE WAS: " + phrase + ". " + "YOU HAVE " + points + " POINTS. " + "REMEMBER, DO OR DO NOT, THERE IS NO TRY.");
        this.clearGameArea();
        usedPhrases.push(chosenPhrase);
        phraseArray.splice(phraseArray.indexOf(chosenPhrase), 1);
        // console.log(usedPhrases);
        game.startRound();
    },

    alertSoccerStar: function () {
        alert("YOU ARE A SOCCER MASTER! WITH " + points + " POINTS. " + "LET'S PLAY AGAIN!");
        game.resetGame();
    },

    alertGameOver: function () {
        alert("I GUESS YOUR DONT KNOW ANYTHING ABOUT SOCCER?");
        game.resetGame();
    },
};