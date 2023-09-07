import React from "react";
import {BiBookOpen} from 'react-icons/bi'
import {AiOutlineDelete} from 'react-icons/ai'

export const GridCard = ({ blog }) => (
  <div className="w-80 overflow-hidden bg-white shadow-md sm:rounded-lg">
    <img
      src={blog.imageUrl}
      alt={blog.title}
      className="h-32 w-full object-cover"
    />
    <div className="flex items-center justify-between px-2 py-1 sm:p-6">
      <div>
        <h3 className="text-lg font-medium text-gray-900">{blog.title}</h3>
        <div className="mt-1 text-sm text-gray-500">
          <div className="text-blueSecondary dark:text-brandLinear font-bold ">
            Published At: {blog.createdAt}
          </div>
          <div className="mt-2">
            Details: {blog.details}
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <button className="flex items-center justify-between text-white dark:text-[#000] p-2 w-16 h-8 text-xs bg-blueSecondary dark:bg-brandLinear rounded-lg font-bold">
          <BiBookOpen className="text-sm  " /> 
          Open
        </button>
        <button className="flex items-center justify-between text-white dark:text-[#000] p-2 w-auto h-8 text-xs bg-blueSecondary dark:bg-brandLinear rounded-lg font-bold mt-4">
          <AiOutlineDelete className="text-sm " /> 
          Delete
        </button>
      </div>
    </div>
  </div>
);
