import React from "react";

const LoginPage = () => {
  return (
    <div className="login-page">
      <div class="form-container">
        <span class="login-form-bg"></span>

        <span class="signup-form-bg"></span>

        <section class="form-box login-form">
          <h1>login</h1>
          <form>
            <div class="form-control">
              <input type="text" required />
              <label>username</label>
              <i class="bx bxs-user"></i>
            </div>
            <div class="form-control">
              <input type="password" required />
              <label>password</label>
              <i class="bx bxs-lock-alt"></i>
            </div>
            <button type="submit" class="btn">
              login
            </button>
            <div class="link">
              <p>
                Don't have an account? {" "}
                <a href="#" class="signup-link">
                   sign up
                </a>
              </p>
            </div>
          </form>
        </section>

        <section class="text login-text">
          <h1>welcome back</h1>
          <p>
            Continue your language learning journey. Sign in to access
            your personalized learning experience.
          </p>
        </section>

        <section class="form-box signup-form">
          <h1>sign up</h1>
          <form>
            <div class="form-control">
              <input type="text" required />
              <label>username</label>
              <i class="bx bxs-user"></i>
            </div>
            <div class="form-control">
              <input type="text" required />
              <label>email</label>
              <i class="bx bxs-envelope"></i>
            </div>
            <div class="form-control">
              <input type="password" required />
              <label>password</label>
              <i class="bx bxs-lock-alt"></i>
            </div>
            <button type="submit" class="btn">
              sign up
            </button>
            <div class="link">
              <p>
                Already have an account?
                <a class="login-link" href="#">
                  login
                </a>
              </p>
            </div>
          </form>
        </section>

        <section class="text signup-text">
          <h1>welcome Dear</h1>
          <p>
            Join our language learning community! Create an account to unlock a
            world of linguistic possibilities and personalized learning
            experiences.
          </p>
        </section>
      </div>
    </div>
  );
};

export default LoginPage;
