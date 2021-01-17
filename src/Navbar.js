import React, { useState, useRef, useEffect } from "react";
import { NavData, Social } from "./NavData";
import "./FontAwesome/Fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () => {
  const [showLinks, SetshowLinks] = useState(false);
  const navContainer = useRef(null);
  const socialicon = useRef(null);

  useEffect(() => {
    const element = navContainer.current;
    const icon = socialicon.current;
    console.log(element);
    if (showLinks) {
      element.style.display = "inline";
      icon.style.display = "inline";
    } else {
      element.style.display = "none";
      icon.style.display = "none";
    }
  }, [showLinks]);

  return (
    <div className="header-container">
      <div className="nav-header">
        <img src="hdrlogo.svg" alt="pixa" className="header-logo" />

        <div ref={navContainer}>
          <ul className="link-container">
            {NavData.map((data) => {
              const { id, title, url } = data;
              return (
                <li key={id}>
                  <a style={{ textDecoration: "none" }} href={url}>
                    {title}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="icon-container" ref={socialicon}>
          <ul>
            {Social.map((logo) => {
              const { id, url, imge } = logo;
              return (
                <li key={id}>
                  <a href={url}>
                    <img src={imge} />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        <FontAwesomeIcon
          className="nav-toggle"
          onClick={() => SetshowLinks(!showLinks)}
          color="red"
          icon="bars"
          style={{ height: "50px", width: "50px" }}
        />
      </div>
    </div>
  );
};

export default Navbar;
