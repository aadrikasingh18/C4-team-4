import React, { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { MdGridView, MdViewList } from "react-icons/md";
import { Card } from "./Card";
import { GridCard } from "./GridCard";
import { useAuth } from "contexts/AuthContext";
import { onSnapshot } from "firebase/firestore";
import { postsCollection } from "firebase-config/firebase-config";
import { useNavigate } from "react-router-dom";

const Posts = () => {
  const { currentUser } = useAuth();
  const [posts, setPosts] = useState([]);
  const [currentPostId, setCurrentPostId] = useState(null);
  const [isGridView, setIsGridView] = useState(true);
  const navigate = useNavigate();

  const [sortBy, setSortBy] = useState("createdAt");

  useEffect(() => {
    // to avoid memory leak store it into var
    const userId = currentUser && currentUser.uid;
    console.log("loading user post");
    const unsubscribe = onSnapshot(postsCollection, function (snapshot) {
      // sync up our local notes array with the snapshot data
      // kind of websocket connection
      const filterPosts = snapshot.docs.filter((doc) => {
        return doc.data().author.userId === userId;
      });

      const postsArr = filterPosts.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setPosts(postsArr);
    });

    return () => unsubscribe;
  }, [currentUser]);

  const toggleView = () => {
    setIsGridView(!isGridView);
  };

  const handleEdit = (postId) => {
    console.log(postId);
    setCurrentPostId(postId);
    const selectedPost = posts.find((post) => post.id === postId);
    navigate("/admin/createPost", { state: { selectedPost } });
  };

  return (
    <div>
      <div className="post-filters mt-16 flex max-w-7xl justify-between gap-2">
        <div className="relative">
          <div className="flex h-full items-center rounded-full border-2 bg-lightPrimary text-navy-700 dark:bg-navy-900 dark:text-white xl:w-[225px]">
            <p className="pl-3 pr-2 text-xl">
              <FiSearch className="h-4 w-4 text-gray-400 dark:text-white" />
            </p>
            <input
              type="text"
              placeholder="Search by Title"
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
            <GridCard
              key={post.id}
              postId={post.id}
              post={post[0]}
              handleEdit={handleEdit}
            />
          ) : (
            <Card
              key={post.id}
              postId={post.id}
              post={post[0]}
              handleEdit={handleEdit}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Posts;
