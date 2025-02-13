import React from "react";
import Quiz from "../components/Quiz";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { quiz } from "../utils/constants";
const TopicQuiz = () => {
  let { languageName, topicName } = useParams();
  topicName = topicName.split("-").join("");
  const { topics } = quiz.find(
    (q) => q.language.toLowerCase() === languageName.toLowerCase()
  );
  const { topic, questions } = topics.find(
    (topic) => topic.topic.toLowerCase().split(" ").join("") === topicName
  );

  return (
    <main className="section section-center topic-quiz">
      <div className="info">
        <p>
          <span>Language Name :</span> {languageName}
        </p>

        <p>
          <span>Topic Name :</span> {topic}
        </p>
        <p>
          <span>Total Questions :</span> {questions.length}
        </p>
      </div>
      <Quiz questions={questions} />
    </main>
  );
};

export default TopicQuiz;
