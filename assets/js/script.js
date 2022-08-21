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
 * The start quiz intro and button are removed, 
 * and the first question is displayed.
 */

function showGame() {
    let hidden = document.getElementById("hide");
    let intro = document.getElementById("intro-text");
    hidden.style.display = "block";
    intro.style.display = "none";
    displayQuestion();
}
    
    
function displayQuestion() {

}
    


function checkAnswer() {

}

function incrementScore() {


}

function displayQuestion() {

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