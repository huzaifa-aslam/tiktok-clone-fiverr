import React from "react";
import { MdOutlinePermMedia } from "react-icons/md";
import { AiOutlineSetting } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";

import "./sidebar.css";
import { Link } from "react-router-dom";
export const Sidebar = ({ isDarkMode }) => {
  return (
    <div className={`sidebar ${isDarkMode ? "background_black " : "bg-light"}`}>
      <Link to="/" className="button_2">
        <span className="icon_2 ">
          {" "}
          <CgProfile
            className={` ${isDarkMode ? "text_white " : ""}`}
            size={25}
          />
        </span>

        <span className="text_2">Profile</span>
      </Link>
      <Link to="/" className="button_2">
        <span className="icon_2">
          {" "}
          <MdOutlinePermMedia
            className={` ${isDarkMode ? "text_white " : ""}`}
            size={25}
          />
        </span>

        <span className="text_2">Media</span>
      </Link>
      <Link to="/" className="button_2">
        <span className="icon_2">
          {" "}
          <AiOutlineSetting
            className={` ${isDarkMode ? "text_white " : ""}`}
            size={25}
          />
        </span>

        <span className="text_2">Setting</span>
      </Link>
    </div>
  );
};
