import React, { useState } from "react";
import TextEditor from "./components/TextEditor";
import AddModal from "./components/AddModal";
import { MdOutlineSave } from "react-icons/md";
import { createPost } from "firebase-config";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useLocation, useNavigate } from "react-router-dom";
import { editPost } from "firebase-config";

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

  const handleContent = async (newContent) => {
    setContent(newContent);

    if (selectedPost) {
      const updatedPostData = { ...selectedPost };
      updatedPostData[0].content = newContent;
      updatedPostData.updatedAt = Date.now()

      console.log(updatedPostData);

      // await editPost(selectedPost.id, updatedPostData);
      // toast.success(`Auto Save!`, {
      //   position: toast.POSITION.TOP_RIGHT,
      //   autoClose: 3000,
      // });
    }
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
      updatedPostData.updatedAt = Date.now()

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
          <AddModal
            modalData={modalData}
            handleInputs={handleInputs}
            handleSave={handleSave}
          />
          <button
            onClick={() => handleSave("draft")}
            className="flex h-10 w-auto items-center justify-between rounded-lg bg-blueSecondary px-4 py-2 font-bold text-white dark:bg-brandLinear dark:text-[#000]"
          >
            <MdOutlineSave className="mr-2" />
            <div>Save Draft</div>
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
