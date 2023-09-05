import React from "react";

export const Card = ({ blog }) => (
  <div className="my-4 max-w-7xl overflow-hidden bg-white shadow-md sm:rounded-lg">
    <div className="flex items-center justify-between px-4 py-5 sm:px-6">
      <div>
        <h3 className="text-lg font-medium text-gray-900">{blog.title}</h3>
        <p className="text-sm text-gray-500">Published At: {blog.createdAt}</p>
        {!blog.editedAt && (
          <p className="text-sm text-gray-500">Last Edited: {blog.editedAt}</p>
        )}
      </div>
      <div className="flex justify-center gap-4">
        <p className="mt-2 text-sm text-gray-500">Likes: {blog.likes}</p>
        <p className="mt-2 text-sm text-gray-500">Views: {blog.views}</p>
        <p className="mt-2 text-sm text-gray-500">Comments: {blog.comments}</p>
      </div>
      <div className="flex gap-4">
        <button>Delete</button>
        <button>Edit</button>
      </div>
    </div>
  </div>
);
