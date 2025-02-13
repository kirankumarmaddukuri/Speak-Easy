import React, { useState } from "react";

const Quiz = ({ questions }) => {
  const [userAnswers, setUserAnswers] = useState(
    Array(questions.length).fill("")
  );
  const [submitted, setSubmitted] = useState(false);

  const handleAnswerChange = (index, option) => {
    const newAnswers = [...userAnswers];
    newAnswers[index] = option;
    setUserAnswers(newAnswers);
  };

  const handleSubmit = () => {
    if (userAnswers.some((answer) => answer === "")) {
      alert("Please answer all questions before submitting.");
      return;
    }
    setSubmitted(true);
  };

  const score = () => {
    let correct = 0;
    let incorrect = 0;
    userAnswers.forEach((answer, index) => {
      if (answer === questions[index].answer) {
        correct++;
      } else {
        incorrect++;
      }
    });
    return { correct, incorrect };
  };

  const renderResults = () => {
    return questions.map((question, index) => (
      <div key={question.id} className="q-and-opts">
        <p className="question">{index + 1 + " " + question.question}</p>
        <div className="your-ans-and-cor-ans">
          <span
            className={`your-ans 
              ${
                userAnswers[index] === question.answer ? "correct" : "incorrect"
              }`}
          >
            Your answer : {userAnswers[index]}
          </span>
          <span className="correct-ans">
            Correct answer : {question.answer}
          </span>
        </div>
      </div>
    ));
  };

  const { correct, incorrect } = score();

  return (
    <div className="quiz-app">
      {!submitted ? (
        <>
          {questions.map((question, index) => (
            <div key={question.id} className="q-and-opts">
              <p className="question">{index + 1 + ". " + question.question}</p>
              <div className="opts">
                {question.options.map((option) => (
                  <span>
                    <input
                      type="radio"
                      value={option}
                      checked={userAnswers[index] === option}
                      onChange={() => handleAnswerChange(index, option)}
                    />
                    <label key={option}>{option}</label>
                  </span>
                ))}
              </div>
            </div>
          ))}
          <button onClick={handleSubmit} className="btn">
            Submit
          </button>
        </>
      ) : (
        <>
          <div className="results">
            <p>
              Correct answers: <span>{correct}</span>
            </p>
            <p>
              Incorrect answers: <span>{incorrect}</span>
            </p>
            <p>
              Status:{" "}
              <span>
                {correct < 5
                  ? "Poor Performance"
                  : correct < 8
                  ? "Average Performance"
                  : correct < 10
                  ? "Good Performance"
                  : "Excellent Performance"}
              </span>
            </p>
          </div>
          <div className="answers">{renderResults()}</div>
          <button className="btn" onClick={() => window.location.reload()}>
            Re-attempt
          </button>
        </>
      )}
    </div>
  );
};

export default Quiz;
