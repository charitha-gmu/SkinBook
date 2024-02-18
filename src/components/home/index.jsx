import React from "react";
import OutlinedButton from "../common/Button";
import { NavLink } from "react-router-dom";
import { RoutePaths } from "../../utils/routes";

const Home = () => {
  return (
    <div className="home-container">
      <div className="image-container">
        <img
          src="https://ayu.health/blog/wp-content/uploads/2023/01/6-Home-Remedies-for-Glowing-Skin.jpg"
          alt="img-face"
          className="image"
        ></img>
      </div>
      <div className="text-container">
        <p className="heading">Discover Us</p>
        <p className="content">
          Our mission is to empower you with knowledge, tools, and a community
          that supports and celebrates your skin care victories. Start exploring
          today and unlock the true potential of your skin.
        </p>
        <NavLink
            to={RoutePaths.decode}
            className="decode-nav-link"
          >
        <OutlinedButton btnTitle="Decode your Skin" className="discover-button"/>
        </NavLink>
      </div>
    </div>
  );
};

export default Home;
