import React from "react";
import appwriteService from "../../Appwrte/config_service";
import { Link } from "react-router-dom";

const PostCard = ({ $id, title, blogImg }) => {
  return (
    <Link to={`/post/${$id}`}>
      <div className="w-full rounded-xl bg-gray-100 p-4">
        <din className="w-full flex justify-center mb-4">
          <img
            src={appwriteService.getFilePrewiew(blogImg)}
            alt={title}
            className=" rounded-xl"
          />
        </din>
        <h2 className="text-xl font-bold">{title}</h2>
      </div>
    </Link>
  );
};

export default PostCard;
