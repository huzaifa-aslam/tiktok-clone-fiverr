// import { createClient } from "pexels";
import { useState, useEffect } from "react";
import profileCcon from "./../../assets/images/icon.png";

import VideoCard from "../../components/videoCard/VideoCard";
import video_1 from "./../../assets/videos/video-1.mp4";
import video_2 from "./../../assets/videos/video-2.mp4";
import video_3 from "./../../assets/videos/video-3.mp4";
import video_4 from "./../../assets/videos/video-4.mp4";
import video_5 from "./../../assets/videos/video-5.mp4";
import "./VideoScroll.css";
function App() {
  const [videos, setvideos] = useState([
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
  const [videosLoaded, setvideosLoaded] = useState(false);

  const getVideos = (length) => {
    setvideosLoaded(true);
  };
  useEffect(() => {
    getVideos(3);
  }, []);

  return (
    <main>
      <div className="">
        {videosLoaded && videos.length > 0 ? (
          <>
            {videos.map((video, id) => (
              <VideoCard
                key={id}
                index={id}
                videoURL={video.videoURL}
                lastVideoIndex={videos.length - 1}
              />
            ))}
          </>
        ) : (
          <>Loading...</>
        )}
      </div>
    </main>
  );
}

export default App;
