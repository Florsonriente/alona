const questions = [
{
    question: "Choose the country I did my Master Studies in Marketing",
    answers: [
        {text: "Japan", correct: false},
        {text: "France", correct: true},
        {text: "Russia", correct: false},
        {text: "Germany", correct: false},
    ],
    correctComment: "Congratulations! You chose the correct country.I studied Marketing as a Master Defree in France at Sophie Antipolis Universite de Nice and lived in France for 2 years. For my studies I used to speak French at a B2 level every day and coordinate with many people from different nationalities for team projects.",
    incorrectComment: "Sorry, that's incorrect. The correct country is France. I studied Marketing as a Master Defree in France at Sophie Antipolis Universite de Nice and lived in France for 2 years. For my studies I used to speak French at a B2 level every day and coordinate with many people from different nationalities for team projects."
},
{
    question: "The coolest event I took part in",
    answers: [
        {text: "Talent show", correct: false},
        {text: "Dance Championship", correct: true},
        {text: "Singing competition", correct: false},
        {text: "Cooking courses", correct: false},
    ],
    correctComment: "Yes! Dance Championship! I used to go in for dancing professionally as I was a teenager. U used to participate in Championships and to compete with others. Competition is a part of my nature and my pure motivation.",
    incorrectComment: "The correct answer is Worlwide Dance Championship. I used to go in for dancing professionally as I was a teenager and to participate in dance Championships and to compete with others. Competition is a part of my nature and my pure motivation."

},
{
    question: "How many foreign languages did I learn",
    answers: [
        {text: "2", correct: false},
        {text: "8", correct: true},
        {text: "13", correct: false},
        {text: "5", correct: false},
    ],
    correctComment: "Yes! So many languages. I've learnt English, German, French, Spanish, Italian, Polish and Turkish. And I speak Russian too. I am curious and good in learning languages because I have a structured thinking and being creative. The more languages - the more doors to people and opportunities open.",
    incorrectComment: "No, not so many languages.I've learnt English, German, French, Spanish, Italian, Polish and Turkish. And I speak Russian too. I am curious and good in learning languages because I have a structured thinking and being creative. The more languages - the more doors to people and opportunities open."

},
{
    question: "What do other people mostly say about me?",
    answers: [
        {text: "Good designer", correct: false},
        {text: "Persistant & hardworking", correct: true},
        {text: "Has a good feeling of German", correct: false},
        {text: "Needs always wine for motivation", correct: false},
    ],
    correctComment: "Yep!!! I also do think so!!! My colleagues also used to say about me, that you can always teach skills but never teach the attitude. ",
    incorrectComment: "No, not really. People usually say that I'm very engaged and hardworking, goal-oriented person. They say, you can always teach skills but never teach the attitude. "

}

];



const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const quizComments = document.getElementById("comments");

let currentQuestionIndex= 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex= 0;
    score = 0;
    nextButton.innerHTML = 'Next Question';
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer=> {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
                  }
           
            
        button.addEventListener("click", selectAnswer);
    }

    );

}


function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
    quizComments.style.display = "none";
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct"); 
        score++;
        quizComments.style.display = "flex"; // Display comments when the answer is correct
        quizComments.innerHTML = questions[currentQuestionIndex].correctComment;
    }else {

        selectedBtn.classList.add("incorrect");
        quizComments.style.display = "flex"; // Display comments when the answer is incorrect
        quizComments.innerHTML = questions[currentQuestionIndex].incorrectComment;
    }

    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true") {
            button.classList.add("correct");
                    }
                    button.disabled = true;
    });
    nextButton.style.display = "flex";
}

function showScore(){
    resetState();
    /*  */if (score === 1 || score === 2 || score === 0){
        questionElement.innerHTML = `You scored ${score} out of ${questions.length}! Thanks for trying! Seems like we need to meet for a coffee to get to know each other better! `;
    } else if (score === 3) 
    {questionElement.innerHTML = `You scored ${score} out of ${questions.length}! Wow you seem to know me very well! How do you??? ;)`;
} else {questionElement.innerHTML = `Woooooooowwww!!! You scored ${score} out of ${questions.length}! I'm so excited!!! Thanks for trying! `;}
   
   // questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "flex";
}



function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length) {
        showQuestion();
    }else {
        showScore();
    }
    }


nextButton.addEventListener("click" , () => {
    if (currentQuestionIndex < questions.length){
        handleNextButton();
    }else {
        startQuiz();
    }
});



startQuiz();
