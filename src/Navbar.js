import React, { useState } from "react";
import { NavData, Social } from "./NavData";
import "./FontAwesome/Fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () => {
  const [showLinks, SetshowLinks] = useState(false);
  //   const navContainer = useRef(null);
  //   const linkContainer = useRef(null);
  //   useEffect(() => {
  //     const linksHeight = linkContainer.current.getBoundingClientRect().height;
  //     if (showLinks) {
  //       navContainer.current.style.height = `${linksHeight} px`;
  //     } else {
  //       navContainer.current.style.height = "0px";
  //     }
  //   }, [showLinks]);
  return (
    <div className="container">
      <div className="nav-header">
        <img src="hdrlogo.svg" alt="pixa" className="header-logo" />
        <button className="nav-toggle" onClick={() => SetshowLinks(!showLinks)}>
          <FontAwesomeIcon color="red" icon="bars" />
        </button>
      </div>
      {showLinks && (
        <div className="nav-container" /*ref={navContainer}*/>
          <ul className="link-container" /*ref={linkContainer}*/>
            {NavData.map((data) => {
              const { id, title, url } = data;
              return (
                <li key={id}>
                  <a href={url}>{title}</a>
                </li>
              );
            })}
          </ul>
        </div>
      )}

      <div>
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
    </div>
  );
};

export default Navbar;
