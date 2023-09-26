import { React, useState } from "react";
import { FaSave, FaTimes } from "react-icons/fa";

import { HiUpload } from "react-icons/hi";

const AddModal = function (props) {
  const { handleSave, handleInputs, modalData } = props;
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="mx-3 ">
      <button
        className="flex h-10 w-auto items-center justify-between rounded-lg bg-blueSecondary px-4 py-2 font-bold text-white dark:bg-brandLinear dark:text-[#000]"
        onClick={() => setOpen(!isOpen)}
      >
        {isOpen ? (
          <FaTimes className="mr-2 text-sm " />
        ) : (
          <FaSave className="mr-2 text-sm " />
        )}
        {isOpen ? "Close" : "Publish"}
      </button>

      {isOpen && (
        <div
          className="modal absolute z-10 mt-5 flex h-auto w-4/5 flex-col items-center justify-center rounded-lg bg-blueSecondary p-3 text-sm font-bold text-white dark:bg-brandLinear dark:text-[#000] md:w-1/2 md:text-base"
          onClose={() => setOpen(false)}
          // show={isOpen}
        >
          <div className="modal_header border-b-4 border-gray-400 !p-4 text-xl dark:border-gray-900 md:text-xl">
            Creating Post
          </div>
          <div className="w-full rounded-lg p-1 md:p-4">
            <form className="flex flex-col justify-center">
              <div className="flex flex-wrap justify-between">
                <div className="md:w-1/2">
                  <div htmlFor="postName">Post Name</div>
                  <input
                    id="postName"
                    name="title"
                    placeholder="Cybersecurity paper"
                    className="mt-2 w-11/12 rounded-md p-2 "
                    value={modalData.title}
                    onChange={handleInputs}
                  />
                </div>
                <div className="md:w-1/2">
                  <div htmlFor="category">Category</div>
                  <input
                    id="category"
                    name="category"
                    placeholder="Tech"
                    className="mt-2 w-11/12 rounded-md p-2"
                    value={modalData.category}
                    onChange={handleInputs}
                  />
                </div>
              </div>

              <div className=" mt-2 md:mt-5">
                <div htmlFor="postDetails">Post details</div>
                <textarea
                  id="postDetails"
                  name="details"
                  value={modalData.details}
                  onChange={handleInputs}
                  placeholder="e.g. This post is about Cyber security and its properties and how it defends networks and computers from malicious content."
                  rows={5}
                  className="mt-1 w-full rounded-lg border-none p-2 md:p-4"
                />
              </div>
              <div className="mt-2 md:mt-5">
                <div htmlFor="postDetails">Post picture</div>
                <div className="flex w-full items-center justify-center">
                  <label className="flex h-32 w-full cursor-pointer flex-col rounded border-2 border-dashed border-gray-300 hover:bg-gray-50 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-700">
                    <div className="flex flex-col items-center justify-center pt-5 pb-6 text-gray-500 dark:text-gray-900">
                      <HiUpload className="text-4xl" />
                      <p className="py-1 text-sm ">
                        Upload a file or drag and drop
                      </p>
                      <p className="text-xs ">PNG, JPG, GIF up to 10MB</p>
                    </div>
                    <input type="file" className="hidden" />
                  </label>
                </div>
              </div>
            </form>
          </div>
          <div className="modal_footer my-5">
            <button
              color="primary"
              onClick={() => {
                handleSave("publish");
                setOpen(false);
              }}
            >
              Publish
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddModal;
