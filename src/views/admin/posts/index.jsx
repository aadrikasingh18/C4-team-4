import React, { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { MdGridView, MdViewList } from "react-icons/md";
import { useSearchParams } from "react-router-dom";
import { mockBlogData } from "./mockBlogData";
import { Card } from "./Card";
import { GridCard } from "./GridCard";

import { getAllPosts, createPost } from "firebase-config";

const useFetch = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    getAllPosts()
      .then((posts) => {
        setData(posts);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  return { data, loading, error };
};

const Posts = () => {
  const { data: posts } = useFetch();

  console.log(posts);

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

  const handleCreatePost = async (postData) => {
    try {
      const postId = await createPost(postData);
      console.log(`Blog post created with ID: ${postId}`);
      // Reset input fields or navigate to a different page
    } catch (error) {
      // Handle error, e.g., show an error message to the user
      console.error("Error creating blog post:", error);
    }
  };

  const createData = () => {
    mockBlogData.forEach((mock) => {
      createPost(mock);
    });
  };

  return (
    <div>
      <button onClick={createData}>Pass Mock Data to firebase</button>

      <div className="post-filters mt-16 flex max-w-7xl justify-between gap-2">
        <div className="relative">
          <div className="flex h-full items-center rounded-full border-2 bg-lightPrimary text-navy-700 dark:bg-navy-900 dark:text-white xl:w-[225px]">
            <p className="pl-3 pr-2 text-xl">
              <FiSearch className="h-4 w-4 text-gray-400 dark:text-white" />
            </p>
            <input
              type="text"
              placeholder="Search by Title"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="block h-full w-full rounded-full bg-lightPrimary text-sm font-medium text-navy-700 outline-none placeholder:!text-gray-400 dark:bg-navy-900 dark:text-white dark:placeholder:!text-white sm:w-fit"
            />
          </div>
        </div>

        <div className="relative">
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
        </div>
      </div>

      <div
        className={`mt-4 ${
          isGridView
            ? "flex flex-wrap justify-center gap-4 md:justify-start"
            : "list-view"
        }`}
      >
        {posts.map((post) => {
          return isGridView ? (
            <GridCard key={post.id} post={post[0]} />
          ) : (
            <Card key={post.id} postId={post.id} post={post[0]} />
          );
        })}
      </div>
    </div>
  );
};

export default Posts;
