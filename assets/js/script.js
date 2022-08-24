// Wait for the DOM to finish loading before running the game
//Get the button elements and add event listeners to them


let startButton = document.getElementById("start-button"); 
let nextButton = document.getElementById("next-button");
let introArea = document.getElementById("intro-area");
let questionArea = document.getElementById("question-area");
let score = document.getElementById("score");
let questionElement = document.getElementById("question");
let questionNumber = document.getElementById("question-number");
let answerElements = document.getElementById("answer-area");
let answerButtons = document.getElementsByClassName("answer-btn");
let answerOne = document.getElementById("answer1");
let answerTwo = document.getElementById("answer2");
let answerThree = document.getElementById("answer3");
let questionImg = document.getElementById("question-img");

let shuffledQuestions
let currentQuestionIndex

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
    nextButton.classList.add('hide');
    score = 0;
    shuffledQuestions = questions.sort(function () {
        return Math.random() - 0.5;
      });
    currentQuestionIndex = 0
    shuffle();
}

function shuffle() {
   displayQuestion(shuffledQuestions[currentQuestionIndex])
   console.log("Shuffled");
   
}

function displayQuestion(question) {
    questionElement.innerText = question.question;
    for (i of questions) {
        answerOne.innerText = question.answer1;
        answerTwo.innerText = question.answer2;
        answerThree.innerText = question.answer3;
        // questionImg = question.answers[5].img;
    }
    for (let i = 0; i < answerButtons.length; i++) {
        answerButtons[i].addEventListener('click', checkAnswer);
    }
}
    
function checkAnswer(e, question) {
    console.log('Checking answer');
    let selectedButton = e.target;
    let correctAnswer = questions[i].correct;
    if(this.innerHTML === question.correct) {
        selectedButton.classList.add('btn-correct');
        console.log("Correct!")
    } else {
        selectedButton.classList.add('btn-wrong');
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
        answer1: 'Jasmine',
        answer2: 'Moana',
        answer3: 'Raya',
        correct: 'Jasmine',
        img: 'rajah.png',
        
    },
    {
        question : "Which famous canine couple are owned by Roger and Anita?", 
        answer1: "Pongo and Perdi",
        answer2: "Bernard and Bianca",
        answer3: "Flotsam and Jetsam",
        correct: "Pongo and Perdi",
        img: 'rajah.png',
        
    },
    {
        question : "What are the names of Beast's trusty household helpers?",
        answer1: "Chip and Dale",
        answer2: "Cogsworth and Lumiere",
        answer3: "Donald and Daffy",
        correct: "Cogsworth and Lumiere",
        img: 'rajah.png'
        
    },
]
