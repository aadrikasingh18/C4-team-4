import React from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { BiBookOpen, BiCommentDetail, BiLike } from "react-icons/bi";
import { BsEye} from "react-icons/bs";

export const Card = ({ blog }) => (
  <div className="my-4 max-w-7xl overflow-hidden bg-white dark:bg-navy-800 border-2 dark:border-navy-500 shadow-md rounded-lg">
    <div className="flex items-center justify-between p-3 md:p-5 ">
      <div className="text-xs md:text-sm">
        <div className="text-sm md:text-lg font-bold dark:text-gray-400">{blog.title}</div>
        <div className=" text-blueSecondary dark:text-brandLinear font-bold ">Published At: {blog.createdAt}</div>
        {!blog.editedAt && (
          <div className=" text-gray-500">Last Edited: {blog.editedAt}</div>
        )}
      </div>
      <div className="flex justify-center items-center sm:w-3/5 gap-2 sm:gap-4 flex-wrap text-xs sm:text-sm md:text-base text-gray-500">
        <div className="hidden lg:block w-1/2 text-xs text-blueSecondary dark:text-brandLinear font-medium">{blog.details}</div>
        <div className="flex items-center justify-center"><BiLike className="mr-1 md:mx-2 text-xl"/> {blog.likes}</div>
        <div className="flex items-center justify-center"><BiCommentDetail className="mr-1 md:mx-2 text-xl"/> {blog.views}</div>
        <div className="flex items-center justify-center"><BsEye className="mr-1 md:mx-2 text-xl"/> {blog.comments}</div>
      </div>
      <div className="flex justify-center items-center text-xs flex-wrap ">
        <button className="flex items-center justify-between text-white dark:text-[#000] p-2 w-16 h-6 md:h-8  bg-blueSecondary dark:bg-brandLinear rounded-lg md:font-bold">
          <BiBookOpen className="text-sm  " /> 
          Open
        </button>
        <button className="flex items-center justify-between  text-white dark:text-[#000] p-2 w-auto h-6 md:h-8  bg-blueSecondary dark:bg-brandLinear rounded-lg md:font-bold sm:ml-3 mt-2 sm:mt-0">
          <AiOutlineDelete className="text-sm " /> 
          Delete
        </button>
      </div>
    </div>
  </div>
);
