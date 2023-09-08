import React, { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { MdGridView, MdViewList } from "react-icons/md";
import { useSearchParams } from "react-router-dom";
import { mockBlogData } from "./mockBlogData";
import { Card } from "./Card";
import { GridCard } from "./GridCard";

import { getAllPosts, createPost } from "../../../firebase";

const Posts = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const [isGridView, setIsGridView] = useState(true);

  const [searchParams, setSearchParams] = useSearchParams();
  const typeFilter = searchParams.get("type");

  const [sortBy, setSortBy] = useState("createdAt");

  useEffect(() => {
    // Simulate fetching data from an API
    setFilteredData(mockBlogData);
  }, []);

  const handleFilterChange = (key, value) => {
    setSearchParams((prevParams) => {
      if (value === null) {
        prevParams.delete(key);
      } else {
        prevParams.set(key, value);
      }
      return prevParams;
    });
  };

  const toggleView = () => {
    setIsGridView(!isGridView);
  };

  const handleCreatePost = async () => {
    try {
      const postId = await createPost(title, content);
      console.log(`Blog post created with ID: ${postId}`);
      // Reset input fields or navigate to a different page
    } catch (error) {
      // Handle error, e.g., show an error message to the user
      console.error("Error creating blog post:", error);
    }
  };

  return (
    <div>
      <div className="post-filters mt-16 flex max-w-7xl justify-between gap-2">
        <div>
        
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            placeholder="Content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <button onClick={handleCreatePost}>Create Post</button>
        </div>

        {/* <div className="relative">
          <div className="flex h-full items-center rounded-full border-2 bg-lightPrimary text-navy-700 dark:bg-navy-900 dark:text-white xl:w-[225px]">
            <p className="pl-3 pr-2 text-xl">
              <FiSearch className="h-4 w-4 text-gray-400 dark:text-white" />
            </p>
            <input
              type="text"
              placeholder="Search by Title"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              class="block h-full w-full rounded-full bg-lightPrimary text-sm font-medium text-navy-700 outline-none placeholder:!text-gray-400 dark:bg-navy-900 dark:text-white dark:placeholder:!text-white sm:w-fit"
            />
          </div>
        </div> */}

        {/* <div className="relative">
          <button
            className={`rounded-lg py-2 px-4 dark:text-gray-200`}
            onClick={toggleView}
          >
            {isGridView ? <MdViewList /> : <MdGridView />}
          </button>

          <select
            className="rounded-lg py-2 px-4"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="createdAt">Published Date</option>
            <option value="likes">Likes</option>
            <option value="views">Views</option>
            <option value="comments">Comments</option>
          </select>
        </div> */}
      </div>

      {/* <div
        className={`mt-4 ${
          isGridView
            ? "flex flex-wrap justify-center gap-4 md:justify-start"
            : "list-view"
        }`}
      >
        {filteredData
          .filter((blog) =>
            searchTerm
              ? blog.title.toLowerCase().includes(searchTerm.toLowerCase())
              : true
          )
          .map((blog) =>
            isGridView ? (
              <GridCard key={blog.id} blog={blog} />
            ) : (
              <Card key={blog.id} blog={blog} />
            )
          )}
      </div> */}
    </div>
  );
};

export default Posts;
