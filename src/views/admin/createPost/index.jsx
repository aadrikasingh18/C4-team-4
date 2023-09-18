import React, { useState } from "react";
import TextEditor from "./components/TextEditor";
import AddModal from "./components/AddModal";
import { MdOutlineSave } from "react-icons/md";
import { createPost } from "firebase-config";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useLocation } from "react-router-dom";
import { editPost } from "firebase-config";

const NewPost = () => {
  const location = useLocation();
  const { selectedPost } = location.state || {};

  const [content, setContent] = useState(
    selectedPost ? selectedPost[0].content : ""
  );
  // const history = useHistory();

  console.log(selectedPost);

  const handleContent = (newContent) => {
    setContent(newContent);
  };

  const createNewPost = async (type) => {
    const postData = {
      content,
      published: type === "publish" ? true : false,
      title: content.slice(0, 50),
      imageUrl: "https://via.placeholder.com/300x200",
      category: type,
      details: "published post will define",
    };

    await createPost(postData);
    toast.success(`Post Saved Successfully!`, {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 3000,
    });
  };

  const handleSave = async (type) => {
    if (selectedPost) {
      const updatedPostData = { ...selectedPost };
      updatedPostData[0].content = content;
      updatedPostData[0].title = content.slice(0, 90);
      await editPost(selectedPost.id, updatedPostData);
      toast.success(`Post Updated Successfully!`, {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000,
      });
    } else {
      await createNewPost(type);
    }
  };

  return (
    <div className="flex w-full flex-col justify-center overflow-hidden">
      <div className=" flex items-center justify-between p-4 ">
        <div className="flex">
          <AddModal createPost={createPost} />
          <button
            onClick={() => handleSave("draft")}
            className="flex h-10 w-auto items-center justify-between rounded-lg bg-blueSecondary px-4 py-2 font-bold text-white dark:bg-brandLinear dark:text-[#000]"
          >
            <MdOutlineSave className="mr-2" />
            <div>Save Draft</div>
          </button>
          <button
            onClick={() => handleSave("publish")}
            className="flex h-10 w-auto items-center justify-between rounded-lg bg-blueSecondary px-4 py-2 font-bold text-white dark:bg-brandLinear dark:text-[#000]"
          >
            <MdOutlineSave className="mr-2" />
            <div>Publish</div>
          </button>
        </div>
      </div>
      <TextEditor
        selectedPost={selectedPost}
        content={content}
        handleContent={handleContent}
      />
      <ToastContainer />
    </div>
  );
};

export default NewPost;
