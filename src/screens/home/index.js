import React, { useState } from "react";
import Layout from "../../layout";
import ReactPlayer from "react-player";
import {
  FaPlay,
  FaMicrophoneSlash,
  FaUserPlus,
  FaMicrophone,
} from "react-icons/fa";

import "./home.css";
const Home = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const handleMicClick = () => {
    setIsMuted(!isMuted);
  };
  const handlePlay = () => {
    setIsPlaying(true);
  };
  return (
    <Layout>
      <div className="video-card">
        <div className="blur-overlay" />

        <div className="mic-icon" onClick={handleMicClick}>
          {isMuted ? (
            <FaMicrophoneSlash size={30} />
          ) : (
            <FaMicrophone size={30} />
          )}
        </div>
        <div className="player-wrapper">
          <ReactPlayer
            muted={isMuted}
            playing={isPlaying}
            url="https://www.youtube.com/shorts/IhP8MakMdKU"
            controls={false}
            width="100%"
            height="100%"
          />
          <div className="video-info">
            <div className="profile-image">
              <img src="https://via.placeholder.com/50x50.png" alt="Profile" />
            </div>
            <div className="profile-info">
              <div className={`d-flex justify-content-center`}>
                <div>
                  <div className="profile-name">John Doe</div>
                  <div className="profile-name">4 days ago</div>
                </div>
                <div>
                  <button type="button" class="btn btn-outline-info">
                    <FaUserPlus />
                    Info
                  </button>
                </div>
              </div>
              <div className="profile-desc">Video Description</div>
            </div>
          </div>
        </div>
        {!isPlaying && (
          <div className="play-button" onClick={handlePlay}>
            <FaPlay size={50} />
          </div>
        )}
      </div>
    </Layout>
  );
};
export default Home;
