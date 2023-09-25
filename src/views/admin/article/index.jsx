import React from "react";
import { useState, useEffect } from "react";
import { ArticleCard } from "./ArticleCard";
import { getAllPosts } from "firebase-config";

const ArticlePage = () => {
  const [posts, setPosts] = useState([]);
  const fetchApiData = async (url) => {
    try {
      const res = await getAllPosts();
      console.log(res);
      setPosts(res);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchApiData();
  }, []);
  return (
    <>
      <div>
        {posts && posts.filter(post => post[0].published).map(post => {
          return <ArticleCard post={post[0]} authorData={post.author} createdAt={post.createdAt}/>
        })}
      </div>
    </>
  );
};

export default ArticlePage;