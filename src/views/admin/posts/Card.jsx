import { deletePost } from "firebase-config";
import React from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { BiBookOpen } from "react-icons/bi";

export const Card = ({ post }, postId) => (
  <div className="my-4 max-w-7xl overflow-hidden bg-white shadow-md sm:rounded-lg">
    <div className="flex items-center justify-between px-4 py-5 sm:px-6">
      <div>
        <h3 className="text-lg font-medium text-gray-900">{post.title}</h3>
        <div className="text-sm font-bold text-blueSecondary dark:text-brandLinear ">
          Published At: {post.createdAt}
        </div>
        {!post.editedAt && (
          <div className="text-sm text-gray-500">
            Last Edited: {post.editedAt}
          </div>
        )}
      </div>
      <div className="flex justify-center gap-4">
        <p className="mt-2 text-sm text-gray-500">Likes: {post.likes}</p>
        <p className="mt-2 text-sm text-gray-500">Views: {post.views}</p>
        <p className="mt-2 text-sm text-gray-500">Comments: {post.comments}</p>
      </div>
      <div className="flex items-center justify-center">
        <button className="flex h-8 w-16 items-center justify-between rounded-lg bg-blueSecondary p-2 text-xs font-bold text-white dark:bg-brandLinear dark:text-[#000]">
          <BiBookOpen className="text-sm  " />
          Open
        </button>
        <button
          onClick={() => deletePost(postId)}
          className="mx-3 flex h-8 w-auto items-center justify-between rounded-lg bg-blueSecondary p-2 text-xs font-bold text-white dark:bg-brandLinear dark:text-[#000]"
        >
          <AiOutlineDelete className="text-sm " />
          Delete
        </button>
      </div>
    </div>
  </div>
);
