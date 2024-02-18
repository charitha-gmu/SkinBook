import React from "react";
import { NavLink } from "react-router-dom";
import { RoutePaths } from "../../utils/routes";
import { Logo } from "../../assets/images";

const NavlinkList = [
  { title: "Home", path: RoutePaths.home },
  { title: "Skin Decoder", path: RoutePaths.decode },
  // { title: "Routine Tailor", path: RoutePaths.routine },
  { title: "Remedies Live", path: RoutePaths.remedies },
  { title: "Create Impact", path: RoutePaths.impact },
];

const NavBar = () => {
  return (
    <div className="nav-bar-container">
      <div className="logo-container">
        <img src={Logo} className="logo-img" alt="logo"></img>
      <div className="logo">SkinBook</div>
      </div>
      <div className="header-container">

        {NavlinkList.map((ele, index) => {
          return (
            <NavLink
              id={`navlink-${index}`}
              className="header-element"
              activeStyle={{
                border: "2px solid ##6f0f38",
              }}
              to={ele.path}
            >
              {ele.title}
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default NavBar;
