import React, { useEffect, useState } from "react";
import TextEditor from "./components/TextEditor";
import AddModal from "./components/AddModal";
import { MdOutlineSave } from "react-icons/md";
import { createPost, editPost } from "firebase-config";
import { useToast } from "contexts/ToastContext";
import { useLocation, useNavigate } from "react-router-dom";

const NewPost = () => {
  const location = useLocation();
  const { onSuccessToast } = useToast();

  const { selectedPost } = location.state || {};
  const navigate = useNavigate();

  const [content, setContent] = useState(selectedPost ? selectedPost.content : "");
  const [modalData, setModalData] = useState({
    title: selectedPost ? selectedPost?.title : "",
    details: selectedPost ? selectedPost?.details : "",
    category: selectedPost ? selectedPost?.category : "",
  });

  const handleContent = (newContent) => {
    setContent(newContent);
  };

  const autoSave =  async () => {
    if (content && selectedPost && selectedPost.status === "draft") {
      const updatedPostData = {
        ...selectedPost,
        content,
        title: content.slice(0, 90),
        updatedAt: Date.now(),
      };

      try {
        await editPost(selectedPost.id, updatedPostData);
        onSuccessToast("Auto Save!");
      } catch (error) {
        console.error("Auto Save Error: ", error);
      }
    }
  };

  useEffect(() => {
    const delay = setTimeout(autoSave, 2000);
    return () => clearTimeout(delay);
  }, [content, selectedPost]);

  const handleInputs = (e) => {
    const { value, name } = e.target;
    setModalData((prevData) => ({ ...prevData, [name]: value }));
  };

  const createOrUpdatePost = async (action) => {
    const isDraft = action === "draft";
    const postData = {
      content,
      status: action,
      published: !isDraft,
      title: isDraft ? content.slice(0, 50) : modalData.title,
      imageUrl: "https://picsum.photos/300/200?random=1",
      category: isDraft ? action : modalData.category,
      details: isDraft ? "draft post define while publishing" : modalData.details,
    };

    try {
      if (selectedPost) {
        const updatedPostData = {
          ...selectedPost,
          content,
          title: modalData.title,
          status: action,
          published: !isDraft,
          updatedAt: Date.now(),
        };

        await editPost(selectedPost.id, updatedPostData);
        onSuccessToast("Post Updated Successfully!");
      } else {
        await createPost(postData);
      }
      if (isDraft) {
        onSuccessToast("Draft Saved Successfully!");
        navigate("/admin/posts", { replace: true });
      } else {
        onSuccessToast("Post Saved Successfully!");
        navigate("/admin/feed", { replace: true });
      }
    } catch (error) {
      console.error("Create/Update Post Error: ", error);
    }
  };

  return (
    <div className="flex w-full flex-col justify-center overflow-hidden">
      <div className=" flex items-center justify-between p-4">
        <div className="flex">
          <AddModal
            modalData={modalData}
            handleInputs={handleInputs}
            handleSave={createOrUpdatePost}
          />
          <button
            onClick={() => createOrUpdatePost("draft")}
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
    </div>
  );
};

export default NewPost;
