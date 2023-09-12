import { React, useState } from "react";
import { FaSave,FaTimes } from "react-icons/fa";

import { HiUpload } from 'react-icons/hi';

const AddModal = function () {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="mx-3 ">
      <button className="flex items-center justify-between text-white dark:text-[#000] px-4 py-2 w-auto h-10 bg-blueSecondary dark:bg-brandLinear rounded-lg font-bold" onClick={() => setOpen(!isOpen)}>
        {isOpen ? <FaTimes className="text-sm mr-2 " /> : <FaSave className="text-sm mr-2 " /> }
        {isOpen ? "Close" : "Publish"}
      </button>
      {isOpen && (
        <div className="flex justify-center flex-col text-sm md:text-base items-center mt-5 p-3 modal text-white dark:text-[#000] w-4/5 md:w-1/2 h-auto z-10 absolute bg-blueSecondary dark:bg-brandLinear rounded-lg font-bold" onClose={() => setOpen(false)} show={isOpen}>
          <div className="modal_header border-b-4 border-gray-400 !p-4 text-xl md:text-xl dark:border-gray-900">
            Creating Post
          </div>
          <div className="p-1 md:p-4 rounded-lg w-full">
            <form className="flex justify-center flex-col">
                <div className="flex justify-between flex-wrap">
                  <div className="md:w-1/2">
                    <div htmlFor="postName">Post Name</div>
                    <input
                      id="postName"
                      name="postName"
                      placeholder='Cybersecurity paper'
                      className="mt-2 p-2 rounded-md w-11/12 "
                    />
                  </div>
                  <div className="md:w-1/2">
                    <div htmlFor="category">Category</div>
                    <input
                      id="category"
                      name="category"
                      placeholder="Tech"
                      className="mt-2 p-2 rounded-md w-11/12"
                    />
                  </div>
                </div>

                <div className=" mt-2 md:mt-5">
                  <div htmlFor="postDetails">Post details</div>
                  <textarea
                    id="postDetails"
                    name="postDetails"
                    placeholder="e.g. This post is about Cyber security and its properties and how it defends networks and computers from malicious content."
                    rows={5}
                    className="mt-1 p-2 md:p-4 rounded-lg border-none w-full"
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
                        <p className="text-xs ">
                          PNG, JPG, GIF up to 10MB
                        </p>
                      </div>
                      <input type="file" className="hidden" />
                    </label>
                  </div>
                </div>
            </form>
          </div>
          <div className="modal_footer my-5">
            <button color="primary" onClick={() => setOpen(false)}>
              Publish
            </button>
          </div>
        </div>
      )}

    </div>
  );
};

export default AddModal;