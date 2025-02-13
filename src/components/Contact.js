import React from "react";

const Contact = () => {
  return (
    <section class="contact section" id="contact">
      <div class="section-title">
        <h2>contact us</h2>
      </div>
      <div class="contact-center section-center">
        <form class="contact-form">
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
            <textarea placeholder="Enter your message here...."></textarea>
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

export default Contact;
