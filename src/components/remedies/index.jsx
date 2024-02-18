import React from "react";
import RemedyCard from "./RemedyCard";
import { remedies } from "../../utils/remedies";
import { youTubeLinks } from "../../utils/remediesYouTubeLinks";
import { mapping } from "../../utils/mapping";
import { NavLink } from "react-router-dom";
import { RoutePaths } from "../../utils/routes";

const Remedies = () => {
  const value = JSON.parse(localStorage.getItem("skinType"));
  return (
    <div className="remedies-container">
      <div>
        {value?.key ? (
          <>
            <div className="header">{`Cure your ${value?.key} using`} </div>
            <div className="remedy-cards-container">
              {remedies?.[mapping[value?.key]]?.map((remedy, index) => {
                return <RemedyCard data={remedy} id={remedy?.title + index} />;
              })}
            </div>
          </>
        ) : (
          <>
            <div className="header-text-in-remedies">
              <span>Get your personalized remedies by</span>
              <NavLink
                to={RoutePaths.decode}
                className="decode-nav-link"
              >Decoding your Skin</NavLink>
            </div>
            <div className="remedy-cards-container">
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
          </>
        )}
      </div>
    </div>
  );
};

export default Remedies;
