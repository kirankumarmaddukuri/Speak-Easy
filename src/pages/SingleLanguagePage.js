import React from "react";
import { useParams, Link } from "react-router-dom";
import { SingleLanguageOptions } from "../utils/constants";
const SingleLanguagePage = () => {
  const { languageName } = useParams();
  console.log(useParams());
  return (
    <main className="section section-center single-lang">
      <h4>
        <span>Master {languageName}:</span> Learn through Engaging Videos,
        Interactive Quizzes, and Instant Word Lookup!
      </h4>
      <div className="single-lang-options">
        {SingleLanguageOptions.map((langOption) => {
          const { optId, icon, title, text, buttonText, name } = langOption;
          return (
            <article className="single-lang-option" key={optId}>
              <span>{icon}</span>
              <h4>{title}</h4>
              <p>{text}</p>
              {name === "doubt" ? (
                <Link to={`/doubt`} className="btn">
                  {buttonText}
                </Link>
              ) : (
                <Link
                  to={`/languages-page/${languageName}/${name}`}
                  className="btn"
                >
                  {buttonText}
                </Link>
              )}
            </article>
          );
        })}
      </div>
    </main>
  );
};

export default SingleLanguagePage;
