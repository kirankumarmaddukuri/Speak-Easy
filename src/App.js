import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import LanguagesPage from "./pages/LanguagesPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SingleLanguagePage from "./pages/SingleLanguagePage";
import VideosPage from "./pages/VideosPage";
import QuizPage from "./pages/QuizPage";
import NotFoundPage from "./pages/NotFoundPage";
import TopicQuiz from "./pages/TopicQuiz";
import Doubt from "./components/Doubt";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/login">
          <LoginPage />
        </Route>
      
        <Route exact path="/languages-page">
          <LanguagesPage />
        </Route>
        <Route exact path="/doubt">
          <Doubt />
        </Route>

        <Route exact path="/languages-page/:languageName">
          <SingleLanguagePage />
        </Route>
        <Route exact path="/languages-page/:languageName/videos">
          <VideosPage />
        </Route>
        <Route exact path="/languages-page/:languageName/quiz">
          <QuizPage />
        </Route>

        <Route exact path="/languages-page/:languageName/quiz/:topicName">
          <TopicQuiz />
        </Route>
        <Route exact path="*">
          <NotFoundPage />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
