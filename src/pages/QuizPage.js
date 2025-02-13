import React from "react";
import { useParams, Link } from "react-router-dom";
import { quiz } from "../utils/constants";
const QuizPage = () => {
  const { languageName } = useParams();
  const { language, topics } = quiz.find(
    (q) => q.language.toLowerCase() === languageName.toLowerCase()
  );

  return (
    <main className="quiz section section-center">
      <div class="quiz-info">
        <p>
          Expand your language proficiency by engaging with quizzes, a dynamic
          tool for reinforcing knowledge and identifying learning gaps. Harness
          the power of interactive assessments to refine your skills, deepen
          comprehension, and elevate your fluency in
          <span> {language}</span>
        </p>
      </div>
      <div className="topics-list">
        {topics.map((t) => {
          let { topic } = t;
          topic = topic.split(" ").join("-").toLowerCase();
          return (
            <div>
              <h5>{t.topic}</h5>
              <Link
                to={`/languages-page/${languageName}/quiz/${topic}`}
                className="btn"
              >
                Attempt Quiz
              </Link>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default QuizPage;
