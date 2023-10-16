import { formatDistanceToNow } from "date-fns";
import React from "react";
import { Link } from "react-router-dom";

export const ArticleCard = (props) => {
  const { post, authorData, createdAt, id } = props;
  console.log("my props", props);
  const createdDate = new Date(createdAt).toLocaleString();

  return (
    <div className="my-4 max-w-7xl overflow-hidden bg-gray-200 shadow-md dark:bg-navy-700 rounded-xl">
      <Link to={id} state={{ article: props }}>
        <div className="flex items-center justify-between px-4 py-5 sm:px-6">
          <div className="w-fit basis-3/4">
            <h3 className="oneLine text-gray-1000 text-xl md:text-3xl font-bold dark:text-white">
              {post.title.slice(0, 40)}
              {`..`}
            </h3>
            <div className="text-sm md:text-xl text-blueSecondary dark:text-brandLinear">
              {post.content.slice(0, 80)}
              {`...`}
            </div>
            <div className="text-sm text-slate-700 font-bold dark:text-white">
              {authorData.name}
            </div>
            <div className="text-slate-300 text-xs dark:text-gray-400 ">
              Posted {formatDistanceToNow(new Date(createdDate), { addSuffix: true })}
            </div>
          </div>
          <div className="flex items-center justify-center">
            <img
              className="w-32 md:w-44 h-20 md:h-28 rounded-2xl object-fill"
              src={post.imageUrl}
              alt="post tile"
            />
          </div>
        </div>
      </Link>
    </div>
  );
};
