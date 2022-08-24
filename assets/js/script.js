// Wait for the DOM to finish loading before running the game
//Get the button elements and add event listeners to them


let startButton = document.getElementById("start-button"); 
let nextButton = document.getElementById("next-button");
let introArea = document.getElementById("intro-area");
let questionArea = document.getElementById("question-area");
let score = document.getElementById("score");
let questionElement = document.getElementById("question");
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
      console.log(shuffledQuestions);
    currentQuestionIndex = 0
    shuffle();
}

function shuffle() {
   displayQuestion(shuffledQuestions[currentQuestionIndex])
   
}

function displayQuestion(question) {
    questionElement.innerText = question.question;
    for (i of questions) {
        answerOne.innerText = question.answers[0].text;
        answerTwo.innerText = question.answers[1].text;
        answerThree.innerText = question.answers[2].text;
        console.log(answerOne);
    }
    
}
    

function checkAnswer() {
    
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
            {a: 'Jasmine'},
            {b: 'Moana'},
            {c: 'Raya'},
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