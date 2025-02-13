import React from "react";
import { Link } from "react-router-dom";
import { languagesCards } from "../utils/constants";
const LanguagesPage = () => {
  return (
    <main className="languages section section-center">
      {languagesCards.map((languageCard) => {
        return (
          <article class="card" key={languageCard.id}>
            <img src={languageCard.src} alt={languageCard.name} />
            <div>
              <Link to={`/languages-page/${languageCard.name}`}>
                learn {languageCard.name}
              </Link>
            </div>
          </article>
        );
      })}
    </main>
  );
};

export default LanguagesPage;
