import React, { useState, useEffect } from "react";
import { FaHome } from "react-icons/fa";
import { SiYoutubeshorts } from "react-icons/si";
import { CiYoutube } from "react-icons/ci";
import { MdSubscriptions } from "react-icons/md";

function Home() {
  const [videos, setvideos] = useState([]);

  useEffect(() => {
    fetch(
      "https://youtube.googleapis.com/youtube/v3/search?key=AIzaSyCbGgpTUY8EjPJZnBClAmwGXI9Y4KKHaoI&channelId=UCvADy_r3xRF3ken8TRABV8Q&part=snippet,id&order=date&maxResults=50"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setvideos(data.items);
        console.log(data);
      })
      .catch((error) => {
        console.log("Link Eroor", error);
      });
  }, []);
  return (
    <div className="h-screen w-full flex ">
      {/* ----------------left box---------------- */}
      <div className="h-screen w-[6%] flex flex-col items-center px-4 fixed left-0 top-0 mt-[6%]">
        <label className="my-4 text-gray-700  text-xs flex flex-col items-center">
          <FaHome className="text-4xl hover:container hover:text-gray-600" />
          Home
        </label>
        <label className="my-4 text-gray-700  text-xs flex flex-col items-center">
          <SiYoutubeshorts className="text-4xl" />
          Shorts
        </label>
        <label className="my-4 text-gray-700 text-xs flex flex-col items-center ">
          <MdSubscriptions className="text-4xl" />
          Subscriptions
        </label>
        <label className="my-4 text-gray-700  text-xs flex flex-col items-center">
          <CiYoutube className="text-4xl" />
          you
        </label>
      </div>
      {/* --------------------right box------------------------------- */}
      <div className="h-screen w-[90%] ml-[6%] mt-[6%]">
        {/* -------------------------------------video box-------------- */}
        <div className="w-full m-8 flex gap-4 flex-wrap">
        {videos.map((video) => (
            <div key={video.id?.videoId} className="w-[380px] h-[245px] p-4 px-6 font-bold mb-16 mt-4">
              <iframe
                className="rounded-2xl"
                width="380"
                height="245"
                src={`https://www.youtube.com/embed/${video.id?.videoId}`}
                title={video.snippet?.title || "No title available"}
                allowFullScreen
                frameBorder="0"
              ></iframe>
              <h1 className="my-4 text-[12px] px-2">{video.snippet?.title || "No title available"}</h1>
            </div>
          ))}
        </div>
      </div>
      {/* -----------------home box end--------------- */}
    </div>
  );
}

export default Home;
