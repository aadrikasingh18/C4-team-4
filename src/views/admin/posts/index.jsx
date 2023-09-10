import React, { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { MdGridView, MdViewList } from "react-icons/md";
import { useSearchParams } from "react-router-dom";
import { mockBlogData } from "./mockBlogData";
import { Card } from "./Card";
import { GridCard } from "./GridCard";

const Posts = () => {
  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const [isGridView, setIsGridView] = useState(true);

  const [searchParams, setSearchParams] = useSearchParams();
  const typeFilter = searchParams.get("type");
  const [sortBy, setSortBy] = useState("createdAt");
  const [sortOrder, setSortOrder] = useState("desc");

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

  return (
    <div>
      <div className="post-filters flex justify-between items-center  mt-16  max-w-7xl  gap-2">
        <div className="">
          <div className="flex h-12 items-center rounded-3xl md:rounded-full border-2 bg-lightPrimary text-navy-700 dark:bg-navy-900 dark:text-white xl:w-[225px]">
            <div className="pl-3 pr-2 text-xl">
              <FiSearch className="text-xs md:text-lg text-gray-400 dark:text-white" />
            </div>
            <input
              type="text"
              placeholder="Search by Title"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              class="block h-full w-full rounded-full bg-lightPrimary text-xs md:text-base font-medium text-navy-700 outline-none placeholder:!text-gray-400 dark:bg-navy-900 dark:text-white dark:placeholder:!text-white sm:w-fit"
            />
          </div>
        </div>

        <div className="flex items-center">
          <button
            className={`rounded-lg pr-2 sm:p-4 dark:text-gray-200`}
            onClick={toggleView}
          >
            {isGridView ? <MdViewList /> : <MdGridView />}
          </button>

          <select
            className="rounded-lg p-2 text-xs md:text-base h-10 "
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
      </div>
    </div>
  );
};

export default Posts;
