import { React, useState } from "react";
import { FaPlus } from "react-icons/fa";
import { HiUpload } from 'react-icons/hi';

const AddModal = function () {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="mx-3 ">
      <button className="flex items-center justify-center text-white dark:text-[#000] p-2 w-40 h-10 bg-blueSecondary dark:bg-brandLinear rounded-lg font-bold" onClick={() => setOpen(!isOpen)}>
        <FaPlus className="mr-2 text-sm  " />
        {isOpen ? "Close Modal" : "Save Draft"}
      </button>
      {isOpen && (
        <div className="flex justify-center flex-col text-sm md:text-base items-center mt-5 p-4 modal text-white w-4/5 md:w-1/2 h-auto z-10 absolute bg-blueSecondary rounded-lg " onClose={() => setOpen(false)} show={isOpen}>
          <div className="modal_header border-b border-gray-200 !p-6 dark:border-gray-700">
            <strong>Creating Post</strong>
          </div>
          <div className="p-1 md:p-4 rounded-lg w-full">
            <form className="flex justify-centeritems-center flex-col">
                <div className="flex justify-between flex-wrap">
                  <div className="md:w-1/2">
                    <div htmlFor="postName">Post Name</div>
                    <input
                      id="postName"
                      name="postName"
                      placeholder='Cybersecurity paper'
                      className="mt-2 p-2 rounded-md w-full md:mr-2"
                    />
                  </div>
                  <div className="md:w-1/2">
                    <div htmlFor="category">Category</div>
                    <input
                      id="category"
                      name="category"
                      placeholder="Tech"
                      className="mt-2 p-2 rounded-md w-full md:ml-2"
                    />
                  </div>
                </div>

                <div className=" mt-2 md:mt-5">
                  <div htmlFor="postDetails">Post details</div>
                  <textarea
                    id="postDetails"
                    name="postDetails"
                    placeholder="e.g. Cyber security is the practice of defending computers, servers, mobile devices, electronic systems, networks, and data from malicious attacks"
                    rows={5}
                    className="mt-1 p-2 rounded-lg border-none w-full"
                  />
                </div>
                <div className="mt-2 md:mt-5">
                  <div htmlFor="postDetails">Post picture</div>
                  <div className="flex w-full items-center justify-center">
                    <label className="flex h-32 w-full cursor-pointer flex-col rounded border-2 border-dashed border-gray-300 hover:bg-gray-50 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-700">
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <HiUpload className="text-4xl text-gray-300" />
                        <p className="py-1 text-sm text-gray-600 dark:text-gray-500">
                          Upload a file or drag and drop
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          PNG, JPG, GIF up to 10MB
                        </p>
                      </div>
                      <input type="file" className="hidden" />
                    </label>
                  </div>
                </div>
            </form>
          </div>
          <div className="modal_footer">
            <button color="primary" onClick={() => setOpen(false)}>
              Save Post
            </button>
          </div>
        </div>
      )}

    </div>
  );
};

export default AddModal;