import React from "react";
import RemedyCard from "./RemedyCard";
import { remedies } from "../../utils/remedies";
import { youTubeLinks } from "../../utils/remediesYouTubeLinks";

const Remedies = () => {
  return (
    <div className="remedies-container">
      <div className="header">Cure your {"Acne"} using </div>
      <div className="remedy-cards-container">
        {remedies?.drySkin?.map((remedy, index) => {
          return <RemedyCard data={remedy} id={remedy?.title + index} />;
        })}

        {youTubeLinks?.map((link, index) => {
          return (
            <div className="iframe-card">
              <iframe
                title="youtube-video"
                width="500"
                height="500"
                src={link}
                frameborder="0"
                allowfullscreen
              ></iframe>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Remedies;
