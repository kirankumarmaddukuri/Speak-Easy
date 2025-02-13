import React from "react";
import homeImg from "../assets/learning.jpg";
import { Link } from "react-router-dom";
import Companies from "../components/Companies";
import Services from "../components/Services";
import NewsLetter from "../components/NewsLetter";
import Contact from "../components/Contact";
const HomePage = () => {
  return (
    <main className="">
      <div className="home section-center">
        <img src={homeImg} alt="learning" />
        <article>
          <h2>welcome to speakEasy</h2>
          <p>
            Our language learning platform, SpeakEasy, helps you easily learn
            new languages by listening with fun interactive lessons. With
            SpeakEasy, you can improve your language skills at your own pace,
            from anywhere, using engaging exercises and activities. Whether
            you're a beginner or looking to advance your fluency, SpeakEasy
            makes learning languages enjoyable and accessible for everyone.It
            offers a wide range of languages to choose from, including popular
            ones like Spanish, French, and Mandarin. Join SpeakEasy today and
            unlock a world of communication possibilities!
          </p>
          <Link to="/languages-page" className="home-btn">
            Start Learning
          </Link>
        </article>
      </div>
      <Services />
      <Companies />
      <Contact/>
      <NewsLetter />
      
    </main>
  );
};

export default HomePage;
