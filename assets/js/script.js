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

function runGame() {

}

function checkAnswer() {

}

function incrementScore() {


}

function displayQuestion() {

}

function endGame() {

}