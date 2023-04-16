import { useRef, useState, useEffect } from "react";

import useIsInViewport from "../hooks/useIsInViewport";

const VideoCard = ({ index, videoURL, lastVideoIndex, isMute }) => {
  const video = useRef();
  const isInViewport = useIsInViewport(video);
  const [loadNewVidsAt, setloadNewVidsAt] = useState(lastVideoIndex);
  if (isInViewport) {
    setTimeout(() => {
      video.current.play();
    }, 1000);

    if (loadNewVidsAt === Number(video.current.id)) {
      setloadNewVidsAt((prev) => prev + 1);
      //   getVideos(3);
    }
  }

  const togglePlay = () => {
    let currentVideo = video.current;
    if (currentVideo.paused) {
      currentVideo.play();
    } else {
      currentVideo.pause();
    }
  };

  useEffect(() => {
    if (!isInViewport) {
      video.current.pause();
    }
  }, [isInViewport]);
  return (
    <div className="slider-children">
      <video
        muted={isMute}
        className="video"
        ref={video}
        onClick={togglePlay}
        id={index}
        autoPlay={index === 1}
      >
        <source src={videoURL} type="video/mp4" />
      </video>

      <div className="video-content" onClick={togglePlay}></div>
    </div>
  );
};

export default VideoCard;
