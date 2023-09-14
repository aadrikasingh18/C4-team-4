import React, { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { MdGridView, MdViewList } from "react-icons/md";
import { useSearchParams } from "react-router-dom";
import { mockBlogData } from "./mockBlogData";
import { Card } from "./Card";
import { GridCard } from "./GridCard";
import { getAllPosts } from "firebase-config";
import { getAllPostsById } from "firebase-config";
import { useAuth } from "contexts/AuthContext";
import { createPost } from "firebase-config";

const useFetch = (userID) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getAllPostsById(userID).then((response) => setData(response));
  }, [userID]);

  return { data, loading, error };
};

const Posts = () => {
  const { currentUser } = useAuth();
  const { data: posts } = useFetch(currentUser && currentUser.uid);

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

  const createData = () => {
    mockBlogData.forEach((mock) => {
      // console.log(mock)
      createPost(mock);
      console.log("data created successfully");
    });
  };

  return (
    <div>
      <button onClick={createData} className="mt-8">Create Post</button>
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

        <div className="flex items-center">
          <button
            className={`rounded-lg pr-2 dark:text-gray-200 sm:p-4`}
            onClick={toggleView}
          >
            {isGridView ? <MdViewList /> : <MdGridView />}
          </button>

          <select
            className="h-10 rounded-lg p-2 text-xs md:text-base "
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
            <GridCard key={post.id} postId={post.id} post={post[0]} />
          ) : (
            <Card key={post.id} postId={post.id} post={post[0]} />
          );
        })}
      </div>
    </div>
  );
};

export default Posts;
