// Wait for the DOM to finish loading before running the game
//Get the button elements and add event listeners to them


let startButton = document.getElementById("start-button"); 
let introArea = document.getElementById("intro-area");
let questionArea = document.getElementById("question-area");
let score = document.getElementById("score");

startButton.addEventListener('click', runGame);

/**
 * When the Start Button is clicked, the game area changes.
 * The start quiz intro and start button are removed, 
 * and the display question function is called.
 */

function runGame() {
    console.log("Started");
    startButton.classList.add('hide');
    introArea.classList.add('hide');
    questionArea.classList.remove('hide');
    score = 0;
    displayQuestion();
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
        answers : [
            {text: 'Jasmine'},
            {text: 'Moana'},
            {text: 'Raya'},
            {correct: 'Jasmine'},
            {imgFile: 'rajah.png'}
        ] 
    },
    {
        question : "Which famous canine couple are owned by Roger and Anita?",
        answers : [
            {text: "Pongo and Perdi"},
            {text: "Bernard and Bianca"},
            {text: "Flotsam and Jetsam"},
            {correct: "Pongo and Perdi"},
            {imgFile: 'rajah.png'}
        ] 
    },
   
]