import React from "react";

const NewsLetter = () => {
  return (
    <section class="section new-letter" id="new-letter">
      <div class="section-center new-letter-center">
        <div class="new-letter-title">
          <h1>want latest tour info and updates?</h1>
          <p>Sign up for newsletter and stay up to date</p>
        </div>
        <form class="new-letter-form">
          <input type="email" class="form-control" placeholder="Your email" />
          <button type="submit" class="btn">
            submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default NewsLetter;
