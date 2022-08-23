// Wait for the DOM to finish loading before running the game
//Get the button elements and add event listeners to them


let startButton = document.getElementById("start-button"); 
let introArea = document.getElementById("intro-area");
let questionArea = document.getElementById("question-area");

startButton.addEventListener('click', runGame);

function runGame() {
    console.log("Started");
    startButton.classList.add('hide');
    introArea.classList.add('hide');
    questionArea.classList.remove('hide');
}

   





/**
 * When the Start Button is clicked, the game area changes.
 * The start quiz intro and start button are removed, 
 * and the display question function is called.
 */

function showGame() {
    let hidden = document.getElementById("hide");
    let intro = document.getElementById("intro-text");
    let score = document.getElementById("score");
    hidden.style.display = "block";
    intro.style.display = "none";
    displayQuestion();
    score = 0;
}
    
function displayQuestion() {
    let questionNumber = document.getElementById("question-number");
    let quizQuestion = document.getElementById("question");
   

}
    

function checkAnswer() {
    let answerButtons = document.getElementsByClassName("answer-btn");
    for(let i = 0; i < answerButtons.length; i++) {
        answerButtons[i].addEventListener('click', checkAnswer);
    }
}

function incrementScore() {

}


function endGame() {

}


//List of Quiz questions

let questions = [
    {
        question : "Which Disney princess has a pet tiger?",
        answer1 : "Raya",
        answer2 : "Jasmine",
        answer3 : "Moana",
        correct : "Jasmine",
        image : "",
    },
    {
        question : "Which famous canine couple are owned by Roger and Anita?",
        answer1 : "Pongo and Perdi",
        answer2 : "Bernard and Bianca",
        answer3 : "Flotsam and Jetsam",
        correct : "Pongo and Perdi",
        image : "",
    }
]