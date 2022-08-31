// List of variables created for the game

let startButton = document.getElementById("start-button"); 
let rulesButton = document.getElementById("rules-button"); 
let nextButton = document.getElementById("next-button");
let playAgainButton = document.getElementById("play-again-btn");
let introArea = document.getElementById("intro-area");
let questionArea = document.getElementById("question-area");
let endOfGameArea = document.getElementById("end-of-game");
let questionTitle = document.getElementById("question-title");
let questionNumber = document.getElementById("question-number");
let questionElement = document.getElementById("question");
let answerButtons = document.getElementsByClassName("answer-btn");
let answerOne = document.getElementById("answer1");
let answerTwo = document.getElementById("answer2");
let answerThree = document.getElementById("answer3");
let logoImg = document.getElementById("logo-img");
let questionImg = document.getElementById("question-img");
let endImg = document.getElementById("end-img");
let shuffledQuestions = [];
let currentQuestionIndex = [];
let currentQuestion = {};
let score = 0;
let scoreText = document.getElementById("score");
let questionCounter = 0;
let finalScore = document.getElementById("final-score");
let finalScoreText = document.getElementById("final-score-text");
let correctAnswerCounter = 0;

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
    `<h3>Rules</h3>
        <ol id=rules>
            <li>There are 12 questions</li>
            <li>Click to select one of three possible answers</li>
            <li>You will earn 10 points for each correct answer</li>
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
    logoImg.classList.add('hide');
    currentQuestionIndex = [0];
    questionCounter++;
    questionTitle.innerText = `Question ${questionCounter} of ${maxQuestion}`;
    shuffle();
}

function shuffle() {
    shuffledQuestions = questions.sort(function () {
        return Math.random() - 0.5;
      });
   displayQuestion(shuffledQuestions[currentQuestionIndex])
   console.log("Shuffled");
   
}

function displayQuestion(currentQuestion) {
    questionElement.innerText = currentQuestion.question;
    for (i of questions) {
        answerOne.innerText = currentQuestion.answer1;
        answerTwo.innerText = currentQuestion.answer2;
        answerThree.innerText = currentQuestion.answer3;
        questionImg.setAttribute('src', "assets/images/" + currentQuestion.img);
        
    }

    answerOne.addEventListener('click', checkAnswer);
    answerTwo.addEventListener('click', checkAnswer);
    answerThree.addEventListener('click', checkAnswer);

}




function checkAnswer() {
    console.log('Checking answer');
    console.log(questions[0].correct);
        if(this.innerHTML === questions[0].correct) {
            this.classList.add('btn-correct');  
            console.log("Correct!");
            incrementScore(scorePoints);
        } else {
            this.classList.add('btn-wrong');
            console.log("Wrong!")
        }  
    nextButton.classList.remove('hide');
   
    for (let i = 0; i < answerButtons.length; i++) {
        answerButtons[i].removeEventListener('click', checkAnswer);
    }
}

/**
 * Gets the current score from the DOM and increments it by 1
 */
 
 function incrementScore() {
    correctAnswerCounter++;
    score = (correctAnswerCounter * scorePoints);
    scoreText.innerText = score;
    console.log("Adding points");
    
    console.log("Total score is " + correctAnswerCounter);
    return;
}

nextButton.addEventListener('click', nextQuestion);

function nextQuestion() {  
    console.log("Generating next question...");
    for (let i = 0; i < answerButtons.length; i++) {
        answerButtons[i].classList.remove('btn-correct');
        answerButtons[i].classList.remove('btn-wrong');
    }
    questions.splice(0, 1);
    if (questionCounter === 12) {
        nextButton.classList.remove('hide');
        nextButton.innerHTML = 'End';
        endGame();
    } else {
        runGame();
    }
    
}

function endGame() {
    console.log("Calculating total score...")
    questionArea.classList.add('hide');
    endOfGameArea.classList.remove('hide');
    finalScore = correctAnswerCounter * scorePoints;
    if (correctAnswerCounter <= 60) {
        endImg.setAttribute('src', "assets/images/carpet-sad.png");
        finalScoreText.innerHTML = `Oh no! You only scored ${finalScore}. Better luck next time!`;
    }

}

playAgainButton.addEventListener('click', resetGame);

function resetGame() { 
    console.log("Resetting game features");
    score = ((correctAnswerCounter * scorePoints) - (correctAnswerCounter * scorePoints) );
    endOfGameArea.classList.add('hide');
    questionCounter = (maxQuestion - 12);
    for (let i = 0; i < answerButtons.length; i++) {
        answerButtons[i].classList.remove('btn-correct');
        answerButtons[i].classList.remove('btn-wrong');
    }
    nextButton.innerText = "Next";
    correctAnswerCounter = 0;
    scoreText.innerText = `${correctAnswerCounter - correctAnswerCounter}`;
    runGame();

}

//List of Quiz questions

let questions = [
    {
        question : "Which Disney princess has a pet tiger?",
        answer1: 'Jasmine',
        answer2: 'Moana',
        answer3: 'Raya',
        correct: 'Jasmine',
        img: "rajah.png"  
    },
    {
        question : "Which famous canine couple are owned by Roger and Anita?", 
        answer1: "Pongo and Perdi",
        answer2: "Bernard and Bianca",
        answer3: "Flotsam and Jetsam",
        correct: "Pongo and Perdi",
        img: "pongo-perdi.png" 
    },
    {
        question : "What are the names of Beast's trusty household helpers?",
        answer1: "Chip and Dale",
        answer2: "Cogsworth and Lumiere",
        answer3: "Donald and Daffy",
        correct: "Cogsworth and Lumiere",
        img: "cogsworth-lumiere.png" 
    },
    {
        question : "What type of animal is Raya's pet, Tuk Tuk?",
        answer1: "A horse",
        answer2: "A dragon",
        answer3: "An armadillo",
        correct: "An armadillo",
        img: "raya.png"  
    },
    {
        question : "What is the name of Ariel's pet angelfish?",
        answer1: "Sebastian",
        answer2: "Scuttle",
        answer3: "Flounder",
        correct: "Flounder",
        img: "flounder.png" 
    },
    {
        question : "Who becomes Marlin's unlikely friend and sidekick whilst in search of his son?",
        answer1: "Dory",
        answer2: "Sole",
        answer3: "Haddock",
        correct: "Dory",
        img: "nemo.png"  
    },
    {
        question : "What is the name of Moana's brainless chicken?",
        answer1: "Hei hei",
        answer2: "Ho ho",
        answer3: "Ha ha",
        correct: "Hei hei",
        img: "chicken.png"  
    },
    {
        question : "What magical sidekick does Elsa accidentally create as a child?",
        answer1: "A reindeer",
        answer2: "A snowman",
        answer3: "A fire spirit",
        correct: "A snowman",
        img: "frozen.png"   
    },
    {
        question : "Which princess end up with seven trusty sidekicks whilst hiding in the forest?",
        answer1: "Snow White",
        answer2: "Cinderella",
        answer3: "Aurora",
        correct: "Snow White",
        img: "dwarfs.png"   
    },
    {
        question : "Who takes care of Simba after he runs away from the Pridelands?",
        answer1: "Shenzi and Banzai",
        answer2: "Timon and Pumbaa",
        answer3: "Zazu and Rafiki",
        correct: "Timon and Pumbaa",
        img: "simba.png"   
    },
    {
        question : "What is the special talent of Aladdin's pet monkey?",
        answer1: "Dancing",
        answer2: "Flying",
        answer3: "Stealing",
        correct: "Stealing",
        img: "abu.png"   
    },
    {
        question : "Who is Lilo's other worldly companion?",
        answer1: "Stitch",
        answer2: "Mitch",
        answer3: "Rich",
        correct: "Stitch",
        img: "lilo.png"   
    },
    {
        question : "Who is Kristoff's ice business partner?",
        answer1: "Sven",
        answer2: "Sergio",
        answer3: "Olaf",
        correct: "Sven",
        img: "sven.png"   
    },
    {
        question : "Who is Jafar's scheming sidekick?",
        answer1: "Tiago",
        answer2: "Abu",
        answer3: "Iago",
        correct: "Iago",
        img: "iago.png"   
    },
    {
        question : "What type of animal are Ursula's pets?",
        answer1: "Octopus",
        answer2: "Eel",
        answer3: "Shark",
        correct: "Eel",
        img: "ursula.png"   
    },
    {
        question : "Who is King Mufasa's royal advisor?",
        answer1: "Sarabi",
        answer2: "Rafiki",
        answer3: "Zazu",
        correct: "Zazu",
        img: "mufasa.png"   
    },
    {
        question : "What animal is Pocahontas' buddy, Meeko?",
        answer1: "A badger",
        answer2: "A fox",
        answer3: "A racoon",
        correct: "A racoon",
        img: "pocohontas.png"   
    },
    {
        question : "Who agrees to accompany Mowgli on his journey to the man village?",
        answer1: "Baloo",
        answer2: "Bagheera",
        answer3: "Shere Khan",
        correct: "Bagheera",
        img: "mowgli.png"   
    },
    {
        question : "Who is Tiana's childhood friend?",
        answer1: "Sarah",
        answer2: "Lindsay",
        answer3: "Charlotte",
        correct: "Charlotte",
        img: "tiana.png"   
    },
    {
        question : "What is the name of Rapunzel's pet chameleon?",
        answer1: "Newton",
        answer2: "Pascal",
        answer3: "Fleming",
        correct: "Pascal",
        img: "pascal.png"   
    },
    {
        question : "What is the name of Mulan's horse?",
        answer1: "Khan",
        answer2: "Little Brother",
        answer3: "Mushu",
        correct: "Khan",
        img: "mushu.png"   
    },
    {
        question : "What type of animal is Mulan's guardian, Mushu?",
        answer1: "A dragon",
        answer2: "A lizard",
        answer3: "A cricket",
        correct: "A dragon",
        img: "mulan.png"   
    },
    {
        question : "What is Olaf's favourite season?",
        answer1: "Spring",
        answer2: "Summer",
        answer3: "Winter",
        correct: "Summer",
        img: "olaf.png"   
    },
    {
        question : "Who encourages Dumbo to learn to fly?",
        answer1: "His mother",
        answer2: "Timothy Mouse",
        answer3: "The crows",
        correct: "Timothy Mouse",
        img: "dumbo.png"   
    },
    {
        question : "Who are Cinderella's only friends?",
        answer1: "The mice",
        answer2: "The cats",
        answer3: "The step-sisters",
        correct: "The mice",
        img: "cinderella.png"   
    },
    {
        question : "What is the name of Maleficent's shape-shifting sidekick?",
        answer1: "Fauna",
        answer2: "Ravel",
        answer3: "Diaval",
        correct: "Diaval",
        img: "maleficent.png"   
    },
    {
        question : "What are Quasimodo's friends, Victor, Hugo and Laverne?",
        answer1: "Statues",
        answer2: "Pigeons",
        answer3: "Bats",
        correct: "Statues",
        img: "quasimodo.png"   
    },
    {
        question : "What are the names of Cruella De Vil's useless henchmen?",
        answer1: "Bill and Johnny",
        answer2: "Jake and Harry",
        answer3: "Horace and Jasper",
        correct: "Horace and Jasper",
        img: "cruella.png"   
    },
    {
        question : "What is the name of the wise old owl in 'Sword In The Stone'?",
        answer1: "Archimedes",
        answer2: "Socrates",
        answer3: "Aristotle",
        correct: "Archimedes",
        img: "archimedes.png"   
    },
    {
        question : "Who is Pooh's kind, sweet, yet nervous best friend?",
        answer1: "Tigger",
        answer2: "Piglet",
        answer3: "Rabbit",
        correct: "Piglet",
        img: "pooh.png"   
    },
]
