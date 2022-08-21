// Wait for the DOM to finish loading before running the game
//Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "start-quiz") {
                runGame()
            } else {
                
            }
        })
    }

})

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

function runGame() {
    let hidden = document.getElementsByClassName("hide");
    for (let i = 0; i < hidden.length; i++) {
        if (i.style.display === "none") {
            i.style.display = "block";
        } else {
            i.style.display = "none";
        }
    }
    
}

function checkAnswer() {

}

function incrementScore() {


}

function displayQuestion() {

}

function endGame() {

}