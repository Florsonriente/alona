import React, { useState } from 'react';
import { questions } from '../dataModel';

function QuizNavBar() {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [feedback, setFeedback] = useState("");

  const goBack = () => {
    if (questionIndex > 0) {
      setQuestionIndex(prevQuestionIndex => prevQuestionIndex - 1);
      setSelectedAnswer(null);
      setFeedback("");
    }
  };

  const goToNext = () => {
    if (questionIndex < questions.length - 1) {
      setQuestionIndex(prevQuestionIndex => prevQuestionIndex + 1);
      setSelectedAnswer(null);
      setFeedback("");
    }
  };

  const handleAnswerClick = (answer) => {
    setSelectedAnswer(answer);
    if (answer === questions[questionIndex].correctAnswer) {
      setFeedback("Correct!");
    } else {
      setFeedback("Incorrect. Try again.");
    }
  };

  const onLastQuestion = questionIndex === questions.length - 1;
  const onFirstQuestion = questionIndex === 0;

  return (
    <div className="quiz-nav">
      <h2>BLOCK_02_Quiz Navigation:</h2>
      <nav>
        <span>Question #{questionIndex + 1}</span>
        <div>
          <button onClick={goBack} disabled={onFirstQuestion}>
            Go Back
          </button>
          <button onClick={goToNext} disabled={onLastQuestion}>
            Next Question
          </button>
        </div>
        <div>
          <p>{questions[questionIndex].prompt}</p>
          <div>
            {questions[questionIndex].possibleAnswers.map((answer, index) => (
              <button
                key={index}
                onClick={() => handleAnswerClick(answer)}
                disabled={selectedAnswer !== null}
              >
                {answer}
              </button>
            ))}
          </div>
          {selectedAnswer && <p>{feedback}</p>}
        </div>
      </nav>
    </div>
  );
}

export default QuizNavBar;
