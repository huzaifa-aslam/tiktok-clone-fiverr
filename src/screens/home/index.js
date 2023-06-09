import React, { useState } from "react";
import { FaUserPlus } from "react-icons/fa";
import profileCcon from "./../../assets/images/icon.png";
// import { BsPlay } from "react-icons/bs";
import {
  BiVolumeFull,
  BiVolumeMute,
  // BiPause
} from "react-icons/bi";
import { BsFillMoonFill, BsSun } from "react-icons/bs";
import {
  AiOutlineHeart,
  AiOutlineComment,
  AiOutlineShareAlt,
} from "react-icons/ai";
import { FiMoreHorizontal } from "react-icons/fi";
import video_1 from "./../../assets/videos/video-1.mp4";
import video_2 from "./../../assets/videos/video-2.mp4";
import video_3 from "./../../assets/videos/video-3.mp4";
import video_4 from "./../../assets/videos/video-4.mp4";
import video_5 from "./../../assets/videos/video-5.mp4";

import "./home.css";
import { Sidebar } from "../../components/sidebar/Sidebar";
import VideoCard from "../../components/videoCard/VideoCard";
const Home = () => {
  const [isPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  const [data, setData] = useState([
    {
      id: 1,
      // videoURL: "https://www.youtube.com/shorts/7npz-I3WIGw",
      videoURL: video_1,
      profileURL: profileCcon,
      name: "John Deo",
      time: "4 days ago",
      description: "Video Description",
      hearts: "123",
      shares: "123",
      comments: "123",
      isPlaying: false,
    },
    {
      id: 2,
      // videoURL: "https://www.youtube.com/shorts/4VX5yg1EUQI",
      videoURL: video_2,
      profileURL: profileCcon,
      name: "John john",
      time: "4 days ago",
      description: "Video Description",
      hearts: "98",
      shares: "899",
      comments: "2987",
      isPlaying: false,
    },
    {
      id: 3,
      // videoURL: "https://www.youtube.com/shorts/7npz-I3WIGw",
      videoURL: video_3,
      profileURL: profileCcon,
      name: "John",
      time: "7 days ago",
      description: "Video Description",
      hearts: "34",
      shares: "23",
      comments: "79",
      isPlaying: false,
    },
    {
      id: 3,
      // videoURL: "https://www.youtube.com/shorts/7npz-I3WIGw",
      videoURL: video_3,
      profileURL: profileCcon,
      name: "John",
      time: "7 days ago",
      description: "Video Description",
      hearts: "34",
      shares: "23",
      comments: "79",
      isPlaying: false,
    },
    {
      id: 4,
      // videoURL: "https://www.youtube.com/shorts/7npz-I3WIGw",
      videoURL: video_4,
      profileURL: profileCcon,
      name: "John",
      time: "7 days ago",
      description: "Video Description",
      hearts: "34",
      shares: "23",
      comments: "79",
      isPlaying: false,
    },
    {
      id: 5,
      // videoURL: "https://www.youtube.com/shorts/7npz-I3WIGw",
      videoURL: video_5,
      profileURL: profileCcon,
      name: "John",
      time: "7 days ago",
      description: "Video Description",
      hearts: "34",
      shares: "23",
      comments: "79",
      isPlaying: false,
    },
  ]);

  const handleMicClick = () => {
    setIsMuted(!isMuted);
  };
  const handlePlay = (itemId) => {
    let temp = [...data];
    let temp2 = temp?.map((item) => {
      return {
        ...item,
        isPlaying: false,
      };
    });
    let findItem = temp2?.find((item) => item.id === itemId);
    if (findItem) {
      findItem.isPlaying = !findItem.isPlaying;
    }
    setData(temp2);
  };

  const handleModeToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div
      className={`scroll-container ${
        isDarkMode ? "dark-bg-color text-light" : "light-background text-dark"
      }`}
    >
      <div className="container">
        <Sidebar isDarkMode={isDarkMode} />
        <div className="row d-flex justify-content-center">
          <div className="col-md-3 pt-4 leftCol text-center">
            <h6 className="logo">Logo</h6>
          </div>
          <div className="col-md-6  ">
            {data?.map((item, index) => {
              if (index === 0) {
                return (
                  <div
                    data-id={item?.id}
                    className="d-flex justify-content-center scroll-area"
                  >
                    <div
                      key={index}
                      className={`video-card
                    
                    ${
                      isDarkMode
                        ? "video-card-dark-shadow"
                        : "video-card-light-shadow"
                    }
                    `}
                    >
                      <div className="blur-overlay" />
                      <div
                        className="mic-icon mic-icon-top"
                        onClick={handleMicClick}
                      >
                        {isMuted ? (
                          <BiVolumeMute size={30} />
                        ) : (
                          <BiVolumeFull size={30} />
                        )}
                      </div>
                      <div className="player-wrapper">
                        <VideoCard
                          isMute={isMuted}
                          key={index}
                          index={index}
                          videoURL={item.videoURL}
                          lastVideoIndex={data.length - 1}
                        />
                        <div className="video-info">
                          <div className="profile-image">
                            <img
                              style={{ height: "47px" }}
                              src={item?.profileURL}
                              alt="Profile"
                            />
                          </div>
                          <div className="profile-info">
                            <div className={`d-flex justify-content-between`}>
                              <div>
                                <div className="profile-name">{item?.name}</div>
                                <div className="profile-day">{item?.time}</div>
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
                            <div className="profile-desc">
                              {item?.description}
                            </div>
                          </div>
                        </div>
                      </div>
                      {!isPlaying && (
                        <div className="play-button" onClick={handlePlay}></div>
                      )}
                    </div>

                    <div
                      className={`
                      
                       justify-content-center d-flex  ms-4 action_main action_main_first`}
                    >
                      <div className="text-center margin">
                        <div className="action_icon">
                          <AiOutlineHeart size={30} />
                        </div>
                        <span>{item?.hearts}</span>
                      </div>
                      <div className="text-center margin">
                        <div className="action_icon">
                          <AiOutlineComment size={30} />
                        </div>
                        <span>{item?.comments}</span>
                      </div>
                      <div className="text-center margin">
                        <div className="action_icon">
                          <AiOutlineShareAlt size={30} />
                        </div>
                        <span>{item?.shares}</span>
                      </div>
                      <div className="text-center margin">
                        <div className="action_icon">
                          <FiMoreHorizontal size={30} />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              } else {
                return (
                  <div
                    data-id={item?.id}
                    className="d-flex justify-content-center scroll-area"
                  >
                    <div
                      key={index}
                      className={`video-card top
                    
                    ${
                      isDarkMode
                        ? "video-card-dark-shadow"
                        : "video-card-light-shadow"
                    }
                    `}
                    >
                      <div
                        className="mic-icon mic-icon-rest"
                        onClick={handleMicClick}
                      >
                        {isMuted ? (
                          <BiVolumeMute size={30} />
                        ) : (
                          <BiVolumeFull size={30} />
                        )}
                      </div>
                      <div className="player-wrapper">
                        <VideoCard
                          isMute={isMuted}
                          key={index}
                          index={index}
                          videoURL={item.videoURL}
                          lastVideoIndex={data.length - 1}
                        />
                        <div className="video-info">
                          <div className="profile-image">
                            <img
                              style={{ height: "47px" }}
                              src={item?.profileURL}
                              alt="Profile"
                            />
                          </div>
                          <div className="profile-info">
                            <div className={`d-flex justify-content-between`}>
                              <div>
                                <div className="profile-name">{item?.name}</div>
                                <div className="profile-day">{item?.time}</div>
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
                            <div className="profile-desc">
                              {item?.description}
                            </div>
                          </div>
                        </div>
                      </div>
                      {!isPlaying && (
                        <div className="play-button" onClick={handlePlay}></div>
                      )}
                    </div>

                    <div
                      className={`
                      
                       justify-content-center d-flex  ms-4 action_main action_main_rest`}
                    >
                      <div className="text-center margin">
                        <div className="action_icon">
                          <AiOutlineHeart size={30} />
                        </div>
                        <span>{item?.hearts}</span>
                      </div>
                      <div className="text-center margin">
                        <div className="action_icon">
                          <AiOutlineComment size={30} />
                        </div>
                        <span>{item?.comments}</span>
                      </div>
                      <div className="text-center margin">
                        <div className="action_icon">
                          <AiOutlineShareAlt size={30} />
                        </div>
                        <span>{item?.shares}</span>
                      </div>
                      <div className="text-center margin">
                        <div className="action_icon">
                          <FiMoreHorizontal size={30} />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }
            })}
          </div>
          <div className="col-md-3 d-flex  pt-4 rightCol">
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
                className="checkbox"
                id="checkbox"
              />
              <label htmlFor="checkbox" className="checkbox-label">
                <BsFillMoonFill className=" fa-moon" size={30} />
                <BsSun className=" fa-moon" size={30} />
                <span className="ball"></span>
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
