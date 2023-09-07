import React from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { BiBookOpen } from "react-icons/bi";

export const Card = ({ blog }) => (
  <div className="my-4 max-w-7xl overflow-hidden bg-white shadow-md sm:rounded-lg">
    <div className="flex items-center justify-between px-4 py-5 sm:px-6">
      <div>
        <h3 className="text-lg font-medium text-gray-900">{blog.title}</h3>
        <div className="text-sm text-blueSecondary dark:text-brandLinear font-bold ">Published At: {blog.createdAt}</div>
        {!blog.editedAt && (
          <div className="text-sm text-gray-500">Last Edited: {blog.editedAt}</div>
        )}
      </div>
      <div className="flex justify-center gap-4">
        <p className="mt-2 text-sm text-gray-500">Likes: {blog.likes}</p>
        <p className="mt-2 text-sm text-gray-500">Views: {blog.views}</p>
        <p className="mt-2 text-sm text-gray-500">Comments: {blog.comments}</p>
      </div>
      <div className="flex justify-center items-center">
        <button className="flex items-center justify-between text-white dark:text-[#000] p-2 w-16 h-8 text-xs bg-blueSecondary dark:bg-brandLinear rounded-lg font-bold">
          <BiBookOpen className="text-sm  " /> 
          Open
        </button>
        <button className="flex items-center justify-between text-white dark:text-[#000] p-2 w-auto h-8 text-xs bg-blueSecondary dark:bg-brandLinear rounded-lg font-bold mx-3">
          <AiOutlineDelete className="text-sm " /> 
          Delete
        </button>
      </div>
    </div>
  </div>
);
