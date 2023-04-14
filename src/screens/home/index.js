import React, { useState } from "react";
import ReactPlayer from "react-player";
import { FaPlay, FaUserPlus } from "react-icons/fa";
import { BiVolumeFull, BiVolumeMute } from "react-icons/bi";
import { BsFillMoonFill, BsSun } from "react-icons/bs";
import {
  AiOutlineHeart,
  AiOutlineComment,
  AiOutlineShareAlt,
} from "react-icons/ai";
import { FiMoreHorizontal } from "react-icons/fi";

import "./home.css";
import { Sidebar } from "../../components/sidebar/Sidebar";
const Home = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  const handleMicClick = () => {
    setIsMuted(!isMuted);
  };
  const handlePlay = () => {
    setIsPlaying(true);
  };
  const handleModeToggle = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <div
      className={
        isDarkMode ? "bg-dark text-light" : "light-background text-dark"
      }
    >
      <div className="container">
        <div className="row">
          <Sidebar isDarkMode={isDarkMode} />
          <div className="col-md-3 pt-4">
            <h6 className="logo">Logo</h6>
          </div>
          <div className="col-md-6 d-flex justify-content-center">
            <div className="video-card">
              <div className="blur-overlay" />

              <div className="mic-icon" onClick={handleMicClick}>
                {isMuted ? (
                  <BiVolumeMute size={30} />
                ) : (
                  <BiVolumeFull size={30} />
                )}
              </div>
              <div className="player-wrapper">
                <ReactPlayer
                  muted={isMuted}
                  playing={isPlaying}
                  url="https://www.youtube.com/watch?v=dx1YydHU_Wo"
                  controls={false}
                  width="100vw"
                  height="100vh"
                  // style={{ position: "absolute", top: 0, left: 0 }}
                />
                <div className="video-info">
                  <div className="profile-image">
                    <img
                      src="https://via.placeholder.com/50x50.png"
                      alt="Profile"
                    />
                  </div>
                  <div className="profile-info">
                    <div className={`d-flex justify-content-between`}>
                      <div>
                        <div className="profile-name">John Doe</div>
                        <div className="profile-day">4 days ago</div>
                      </div>
                      <div>
                        <button
                          type="button"
                          className="btn btn-outline-light rounded-pill "
                        >
                          <FaUserPlus className="follow" />
                          Follow
                        </button>
                      </div>
                    </div>
                    <div className="profile-desc">Video Description</div>
                  </div>
                </div>
              </div>
              {!isPlaying && (
                <div className="play-button" onClick={handlePlay}>
                  <FaPlay className="text-light" size={50} />
                </div>
              )}
            </div>
            <div className="justify-content-center d-flex flex-column-reverse  bg-dark ms-4 action_main">
              <div className="text-center margin">
                <div className="action_icon">
                  <FiMoreHorizontal size={30} />
                </div>
              </div>
              <div className="text-center margin">
                <div className="action_icon">
                  <AiOutlineShareAlt size={30} />
                </div>
                <span className="text-light">123</span>
              </div>
              <div className="text-center margin">
                <div className="action_icon">
                  <AiOutlineComment size={30} />
                </div>
                <span className="text-light">123</span>
              </div>
              <div className="text-center margin">
                <div className="action_icon">
                  <AiOutlineHeart size={30} />
                </div>
                <span className="text-light">123</span>
              </div>
            </div>
          </div>
          <div className="col-md-3 d-flex justify-content-end pt-4">
            <span
              className={`switchText ${
                isDarkMode ? "blur-text" : ""
              } d-inline-block pe-3`}
            >
              Light
            </span>
            <div>
              <input
                onChange={handleModeToggle}
                type="checkbox"
                class="checkbox"
                id="checkbox"
              />
              <label for="checkbox" class="checkbox-label">
                <BsFillMoonFill class=" fa-moon" size={30} />
                <BsSun class=" fa-moon" size={30} />
                <span class="ball"></span>
              </label>
            </div>
            <span
              className={`switchText ${
                isDarkMode ? "" : "blur-text-dark"
              } d-inline-block ps-3`}
            >
              Dark
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
