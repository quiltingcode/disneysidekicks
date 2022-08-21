// Wait for the DOM to finish loading before running the game
//Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button"); 

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "start-quiz") {
                showGame();
            } else {
                let gameType = this.getAttribute("data-type");
                alert(`You clicked ${gameType}`);
            }
        });
    }

});



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
    let answerOne = document.getElementById("answer-a");
    let answerTwo = document.getElementById("answer-b");
    let answerThree = document.getElementById("answer-c");
    for (let i = questions; i < questions.length; i++);

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