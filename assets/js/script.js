// Wait for the DOM to finish loading before running the game
//Get the button elements and add event listeners to them


let startButton = document.getElementById("start-button"); 
let rulesButton = document.getElementById("rules-button"); 
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
let currentQuestion = {};
let availableQuestions = [];

startButton.addEventListener('click', runGame);

/**
 * When the Start Button is clicked, the game area changes.
 * The start quiz intro and start button are removed, 
 * and the display question function is called.
 */

function runGame() {
    console.log("Started");
    startButton.classList.add('hide');
    rulesButton.classList.add('hide');
    introArea.classList.add('hide');
    questionArea.classList.remove('hide');
    nextButton.classList.add('hide');
    score = 0;
    shuffledQuestions = questions.sort(function () {
        return Math.random() - 0.5;
      });
    currentQuestionIndex = 0;
    questionNumber = 1;
    shuffle();
}

function shuffle() {
   displayQuestion(shuffledQuestions[currentQuestionIndex])
   console.log("Shuffled");
   
}

function displayQuestion(currentQuestion) {
    questionElement.innerText = currentQuestion.question;
    for (i of questions) {
        answerOne.innerText = currentQuestion.answer1;
        answerTwo.innerText = currentQuestion.answer2;
        answerThree.innerText = currentQuestion.answer3;
    }
    for (let i = 0; i < answerButtons.length; i++) {
        answerButtons[i].addEventListener('click', checkAnswer);
    }
}

function checkAnswer() {
    console.log('Checking answer');
    for (let i = 0; i < answerButtons.length; i++){
        if(this.innerHTML === currentQuestion.correct) {
            this.classList.add('btn-correct');  
            console.log("Correct!");
            incrementScore();
        } else {
            this.classList.add('btn-wrong');
            console.log("Wrong!")
            console.log(this.innerHTML);
            console.log(currentQuestion.correct);
        }
    }
    nextButton.classList.remove('hide');
    for (let i = 0; i < answerButtons.length; i++) {
        answerButtons[i].removeEventListener('click', checkAnswer);
        // answerButtons[i].classList.remove('btn:hover');
    }

}

nextButton.addEventListener('click', nextQuestion);

function nextQuestion() {  
    currentQuestionIndex++;
    questionNumber++;
    displayQuestion;
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
