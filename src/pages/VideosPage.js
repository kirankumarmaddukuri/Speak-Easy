import React, { useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { videos } from "../utils/constants";
const VideosPage = () => {
  const { languageName } = useParams();
  const { language, levelsList } = videos.find(
    (video) => video.language.toLowerCase() === languageName.toLowerCase()
  );
  const [completedStates, setCompletedStates] = useState(
    levelsList.map(() => false) 
  );

  const handleChange = (index) => {
    setCompletedStates((prevStates) => {
      const newStates = [...prevStates];
      newStates[index] = !newStates[index]; 
      return newStates;
    });
  };
  return (
    <main className="videos section section-center">
      <div class="videos-info">
        <p>
          {`Unlock your `}
          <span>{language.toUpperCase()}</span>
          {` potential with our curated videos. From beginner basics to expert insights, each video is a step towards fluency. Start your journey to ${language} mastery today!`}
        </p>
      </div>
      
      {levelsList.map((level) => {

        return (
          <div className="videos-level">
            <h4>{level.level}</h4>
           
            <div className="videos-list">
              {level.videosList.map((video, videoIndex) => {
                return (
                  <div
                    className={completedStates[videoIndex] ? "completed" : ""}
                  >
                    <h5>
                      <input
                        type="checkbox"
                        name={`isCompleted-${videoIndex}`}
                        checked={completedStates[videoIndex]}
                        onChange={() => handleChange(videoIndex)}
                      />{" "}
                      {video.title}
                    </h5>
                    <a href={video.src} className="btn">
                      Watch video
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </main>
  );
};

export default VideosPage;
