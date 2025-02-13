import React from "react";

const Doubt = () => {
  return (
    <section class="doubt section">
      <div class="section-title">
        <h4>Doubt Submission Form</h4>
      </div>
      <div class="doubt-center section-center">
        <form class="doubt-form">
          <div class="input-name">
            <input type="text" placeholder="Enter your name" />
          </div>
          <div class="input-email">
            <input type="email" placeholder="Enter your email" />
          </div>
          <div class="input-phone-no">
            <input type="text" placeholder="Enter your phone number" />
          </div>
          <div class="input-msg">
            <textarea placeholder="Enter your doubt here...."></textarea>
          </div>
          <div class="form-btn">
            <button type="submit" class="submit-btn btn">
              submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Doubt;
