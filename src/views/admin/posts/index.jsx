import { useEffect, useState } from "react";
import { apiService } from "./PostData";
import { Card } from "./components/Card";
import NftCard from "components/card/NftCard";
import { useSearchParams } from "react-router-dom";

import React from "react";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  const [filteredData, setFilteredData] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();

  const typeFilter = searchParams.get("type");

  useEffect(() => {
    apiService.getAllPosts().then((data) => setPosts(data));
  }, []);

  useEffect(() => {
    const newFilteredPosts = posts.filter((post) => {
      return typeFilter ? post.status.toLowerCase() === typeFilter : post;
    });

    setFilteredData(newFilteredPosts);
  }, [typeFilter, posts]);

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

  return (
    <div>
      <div className="post-filters flex gap-2">
        <button
          className={`${
            typeFilter === "draft" ? "bg-blue-500" : "bg-gray-300"
          } rounded-lg py-2 px-4`}
          onClick={() => handleFilterChange("type", "draft")}
        >
          Drafts
        </button>
        <button
          className={`${
            typeFilter === "published" ? "bg-blue-500" : "bg-gray-300"
          } rounded-lg py-2 px-4`}
          onClick={() => handleFilterChange("type", "published")}
        >
          Published
        </button>
        <button
          className={`${
            typeFilter === "scheduled" ? "bg-blue-500" : "bg-gray-300"
          } rounded-lg py-2 px-4`}
          onClick={() => handleFilterChange("type", "scheduled")}
        >
          Scheduled
        </button>
        {typeFilter && (
          <button
            className={`rounded-lg py-2 px-4`}
            onClick={() => handleFilterChange("type", null)}
          >
            Clear Filter
          </button>
        )}
      </div>

      <div className="mt-4 flex max-w-7xl flex-wrap gap-4 border p-6">
        {filteredData.map((post) => (
          <Card key={post._id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Posts;
