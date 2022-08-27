// Wait for the DOM to finish loading before running the game
//Get the button elements and add event listeners to them


let startButton = document.getElementById("start-button"); 
let rulesButton = document.getElementById("rules-button"); 
let nextButton = document.getElementById("next-button");
let introArea = document.getElementById("intro-area");
let questionArea = document.getElementById("question-area");
let questionTitle = document.getElementById("question-title");
let questionNumber = document.getElementById("question-number");
let questionElement = document.getElementById("question");
let answerElements = document.getElementById("answer-area");
let answerButtons = document.getElementsByClassName("answer-btn");
let answerOne = document.getElementById("answer1");
let answerTwo = document.getElementById("answer2");
let answerThree = document.getElementById("answer3");
let questionImg = document.getElementById("question-img");
let shuffledQuestions
let currentQuestionIndex
let currentQuestion = {};
let scoreText = document.getElementById("score");
let score = 0;
let questionCounter = 0;

const scorePoints = 10;
const maxQuestion = 12;

startButton.addEventListener('click', runGame);

/**
 * When the Start Button is clicked, the game area changes.
 * The start quiz intro and start button are removed, 
 * and the display question function is called.
 */

 rulesButton.addEventListener('click', rules);

function rules() {
    introArea.innerHTML = 
    `<p>Rules</p>
        <ol id=rules>
            <li>There are 10 questions</li>
            <li>Click to select one of three possible answers</li>
            <li>You will earn one point for each correct answer</li>
            <li>After each question, click next to continue</li>
        </ol>`
        rulesButton.classList.add('hide');
}

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
    questionCounter++;
    questionTitle.innerText = `Question ${questionCounter} of ${maxQuestion}`;
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
    console.log(questions[0].correct);
    for (let i = 0; i < answerButtons.length; i++){
        if(this.innerHTML === questions[0].correct) {
            this.classList.add('btn-correct');  
            console.log("Correct!");
            incrementScore(scorePoints);
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
    }

}

nextButton.addEventListener('click', nextQuestion);

function nextQuestion() {  
    console.log("Generating next question...");
    for (let i = 0; i < answerButtons.length; i++) {
        answerButtons[i].classList.remove('btn-correct');
        answerButtons[i].classList.remove('btn-wrong');
    }
    shuffle();
    runGame();
    
}

/**
 * Gets the current score from the DOM and increments it by 1
 */

function incrementScore(num) {
    score += num;
    scoreText.innerText = score;
    // let oldScore = parseInt(document.getElementById("score").innerText);
    // document.getElementById("score").innerText = ++oldScore;
    
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
        img: src="assets/images/rajah.png",
        
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
    {
        question : "What type of animal is Raya's pet, Tuk Tuk?",
        answer1: "A horse",
        answer2: "A dragon",
        answer3: "An armadillo",
        correct: "An armadillo",
        img: 'rajah.png'
        
    },
    {
        question : "What is the name of Ariel's pet angelfish?",
        answer1: "Sebastian",
        answer2: "Scuttle",
        answer3: "Flounder",
        correct: "Flounder",
        img: 'rajah.png'
        
    },
    {
        question : "Who becomes Marlin's unlikely friend and sidekick whilst in search of his son?",
        answer1: "Dory",
        answer2: "Sole",
        answer3: "Haddock",
        correct: "Dory",
        img: 'rajah.png'
        
    },
    {
        question : "What is the name of Moana's brainless chicken?",
        answer1: "Hei hei",
        answer2: "Ho ho",
        answer3: "Ha ha",
        correct: "Hei hei",
        img: 'rajah.png'
        
    },
    {
        question : "What magical sidekick does Elsa accidentally create as a child?",
        answer1: "A reindeer",
        answer2: "A snowman",
        answer3: "A fire spirit",
        correct: "A snowman",
        img: 'rajah.png'
        
    },
    {
        question : "Which princess end up with seven trusty sidekicks whilst hiding in the forest?",
        answer1: "Snow White",
        answer2: "Cinderella",
        answer3: "Aurora",
        correct: "Snow White",
        img: 'rajah.png'
        
    },
    {
        question : "Who takes care of Simba after he runs away from the Pridelands?",
        answer1: "Shenzi and Banzai",
        answer2: "Timon and Pumbaa",
        answer3: "Zazu and Rafiki",
        correct: "Timon and Pumbaa",
        img: 'rajah.png'
        
    },
    {
        question : "What is the special talent of Aladdin's pet monkey?",
        answer1: "Dancing",
        answer2: "Flying",
        answer3: "Stealing",
        correct: "Stealing",
        img: 'rajah.png'
        
    },
    {
        question : "What is the special talent of Aladdin's pet monkey?",
        answer1: "Dancing",
        answer2: "Flying",
        answer3: "Stealing",
        correct: "Stealing",
        img: 'rajah.png'
        
    },
]
