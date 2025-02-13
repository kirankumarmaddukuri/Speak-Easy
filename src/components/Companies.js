import React from "react";
import { companies } from "../utils/constants";
const Companies = () => {
  return (
    <section className="section section-center companies" id="companies">
      <div className="companies-main">
        <article className="companies-header">
          <h3>Trusted By 1000+ Companies</h3>
          <p>
            Elevate your workspace with furniture trusted by over 1000
            companies.
          </p>
        </article>
        <div className="companies-list">
          <div className="companies-list-slide">
            {companies.map((company) => {
              return (
                <img src={company.src} key={company.id} alt="company logo" />
              );
            })}
          </div>
          <div className="companies-list-slide">
            {companies.map((company) => {
              return (
                <img src={company.src} key={company.id} alt="company logo" />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Companies;
