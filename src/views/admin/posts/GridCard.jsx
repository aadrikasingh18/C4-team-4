import React from "react";

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
        <p className="mt-1 text-sm text-gray-500">
          Published At: {blog.createdAt}
        </p>
      </div>
      <div>
        <button>button</button>
      </div>
    </div>
  </div>
);
