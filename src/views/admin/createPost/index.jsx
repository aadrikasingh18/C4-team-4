import React, { useState } from "react";
import TextEditor from "./components/TextEditor";
import AddModal from "./components/AddModal";
import { MdOutlineSave } from "react-icons/md";
import { createPost } from "firebase-config";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useLocation, useNavigate } from "react-router-dom";
import { editPost } from "firebase-config";
import { CollabModal } from "./components/CollabModal";
import { db } from "firebase-config/firebase-config";

const NewPost = () => {
  const location = useLocation();
  const { selectedPost } = location.state || {};
  const navigate = useNavigate();

  const [content, setContent] = useState(
    selectedPost ? selectedPost[0].content : ""
  );

  const [modalData, setModalData] = useState({
    title: selectedPost ? selectedPost[0]?.title : "",
    details: selectedPost ? selectedPost[0]?.details : "",
    category: selectedPost ? selectedPost[0]?.category : "",
  });


  const handleContent = (newContent) => {
    setContent(newContent);
  };

  // console.log(modalData);

  const handleInputs = (e) => {
    const { value, name } = e.target;
    setModalData((prevPost) => {
      return { ...prevPost, [name]: value };
    });
  };

  const createNewPost = async (type) => {
    const postData = {
      content,
      status: type,
      published: type === "publish" ? true : false,
      title: type === "publish" ? modalData.title : content.slice(0, 50),
      imageUrl: "https://picsum.photos/300/200?random=1",
      category: type === "publish" ? modalData.category : type,
      details:
        type === "publish" ? modalData.details : "published post will define",
    };

    await createPost(postData);

    setContent("");
    setModalData({
      title: "",
      category: "",
      details: "",
    });

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
      <div className=" flex w-full items-center justify-center py-4">
        <div className="flex flex-wrap">
          <AddModal
            modalData={modalData}
            handleInputs={handleInputs}
            handleSave={handleSave}
          />
          <button
            onClick={() => handleSave("draft")}
            className="mx-1 flex h-7 w-auto items-center justify-between rounded-lg bg-blueSecondary p-1 text-xs font-bold text-white dark:bg-brandLinear dark:text-[#000] sm:h-10 sm:p-3 sm:text-base md:mx-3"
          >
            <MdOutlineSave className="mr-1 sm:mr-2" />
            <div>Save Draft</div>
          </button>
          <CollabModal />
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
