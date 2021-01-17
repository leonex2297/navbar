import React from "react";
import "../Sidebar/sidebar.css";
import SidebarData from "./SidebarData";
import { SiSemanticweb } from "react-icons/si";

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <h1>
        WebPage <SiSemanticweb color="red" />
      </h1>

      <div className="list">
        <ul className="sidebar-list">
          {SidebarData.map((data) => {
            const { id, title, url, icon } = data;
            return (
              <li key={id}>
                <a style={{ textDecoration: "none" }} href={url}>
                  {icon} {title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
