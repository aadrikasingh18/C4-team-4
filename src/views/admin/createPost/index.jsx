import React, { useState } from "react";
import TextEditor from "./components/TextEditor";
import AddModal from "./components/AddModal";
import { MdOutlineSave } from "react-icons/md";
import { createPost } from "firebase-config";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const NewPost = () => {
  const [content, setContent] = useState("");

  const handleContent = (newContent) => {
    // console.log(newContent);
    setContent(newContent);
  };

  const createDraftPost = async () => {
    const postData = {
      content,
      published: false,
      title: content.slice(0, 50),
      imageUrl: "https://via.placeholder.com/300x200",
      category: "draft",
      details: "draft post not defined",
    };

    await createPost(postData);

    toast.success("Draft Saved Successfully!", {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 3000,
    });
  };

  return (
    <div className="flex w-full flex-col justify-center overflow-hidden">
      <div className=" flex items-center justify-between p-4 ">
        <div className="flex">
          <AddModal />
          <button
            onClick={createDraftPost}
            className="flex h-10 w-auto items-center justify-between rounded-lg bg-blueSecondary px-4 py-2 font-bold text-white dark:bg-brandLinear dark:text-[#000]"
          >
            <MdOutlineSave className="mr-2" />
            <div>Save Draft</div>
          </button>
        </div>
      </div>
      <TextEditor content={content} handleContent={handleContent} />
      <ToastContainer />
    </div>
  );
};

export default NewPost;
