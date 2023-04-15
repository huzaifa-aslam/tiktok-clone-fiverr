import React, { useState, useRef } from "react";
import ReactPlayer from "react-player";
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

import "./home.css";
import { Sidebar } from "../../components/sidebar/Sidebar";
const Home = () => {
  const ref = useRef();
  const [isPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  const [data, setData] = useState([
    {
      id: 1,
      videoURL: "https://www.youtube.com/shorts/7npz-I3WIGw",
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
      videoURL: "https://www.youtube.com/shorts/4VX5yg1EUQI",
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
      videoURL: "https://www.youtube.com/shorts/7npz-I3WIGw",
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
  // useEffect(() => {
  //   let temp2 = data?.map((item, index) => {
  //     if (index === 0) {
  //       return {
  //         ...item,
  //         isPlaying: true,
  //       };
  //     } else {
  //       return {
  //         ...item,
  //         isPlaying: false,
  //       };
  //     }
  //   });
  //   setData(temp2);
  // }, []);
  window.onwheel = (e) => {
    debugger;
    let temp = [...data];

    let temp2 = temp?.map((item) => {
      return {
        ...item,
        isPlaying: false,
      };
    });
    let findIndex = temp?.findIndex((item) => item?.isPlaying);
    if (e.deltaY >= 0) {
      // Scrolling Down with mouse
      if (findIndex > -1) {
        let val = findIndex + 1;
        if (val !== -1 && val < temp2?.length) {
          temp2[findIndex + 1].isPlaying = true;

          setData(temp2);
        }
      }
      console.log("Scrolled donw%");
    } else {
      if (findIndex > -1) {
        let val = findIndex - 1;
        if (val !== -1 && val < temp2?.length) {
          temp2[findIndex - 1].isPlaying = true;

          setData(temp2);
        }
      }
    }
  };
  console.log("data", data);
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
    // setIsPlaying(!isPlaying);
  };
  const handleModeToggle = () => {
    setIsDarkMode(!isDarkMode);
  };
  const handleVideoEnd = () => {
    console.log("end");

    // setCurrentVideoIndex((prevIndex) => prevIndex + 1);
  };
  console.log("ref", ref);
  return (
    <div
      className={`scroll-container ${
        isDarkMode ? "bg-dark text-light" : "light-background text-dark"
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
              return (
                <div className="d-flex justify-content-center scroll-area">
                  <div key={index} className="video-card">
                    <div className="blur-overlay" />
                    {/* <div className="pl-icon">
                {isPlaying ? <BiPause size={40} /> : <BsPlay size={40} />}
              </div> */}
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
                        playing={item?.isPlaying}
                        isPlaying={item?.isPlaying}
                        // playing
                        url={item.videoURL}
                        controls={false}
                        width="100wh"
                        // height="800px"
                        height="846px"
                        // width="472"
                        // aspectRatio="9:16"
                        onEnded={() => {
                          handleVideoEnd();
                        }}
                        // onPause={() => {
                        //   handlePlay();
                        // }}
                        onPlay={() => {
                          handlePlay(item?.id);
                        }}
                        // onEnded={() => {
                        //   handlePlay();
                        // }}

                        // style={{ position: "absolute", top: 0, left: 0 }}
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
                      <div className="play-button" onClick={handlePlay}>
                        {/* <BsPlay className="text-light" size={30} /> */}
                      </div>
                    )}
                  </div>

                  <div
                    className={`${
                      isDarkMode ? "background_black " : "bg-light"
                    } justify-content-center d-flex  ms-4 action_main`}
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
