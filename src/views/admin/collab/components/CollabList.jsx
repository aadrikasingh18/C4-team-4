import { useAuth } from 'contexts/AuthContext';
import { collabInvites } from 'firebase-config';
import React, { useState } from 'react'

const CollabList = (props) => {
  const { post, authorData } = props;
  const { currentUser } = useAuth();
  const [showEdit, setShowEdit] = useState("hideEdit");
  const handleCollab=()=>{
    console.log("editor open");
  }
  const handleInvite = async () => {
    await collabInvites(currentUser.uid)
    setShowEdit("showEdit");
    localStorage.setItem("showEdit",JSON.stringify(showEdit))
  };

  return (
    <div className=" dark:text-white w-64 overflow-hidden bg-gray-200 shadow-md dark:bg-navy-700 sm:rounded-lg m-2">
      <img className="h-32 w-full object-cover" src={post.imageUrl} alt="post tile" />
      <div className="p-5">
        <div className="">
          Invited by - {authorData.name}
        </div>
        {showEdit==="showEdit" ? (
          <button 
          onClick={handleCollab}
          className="flex my-2 h-5 sm:h-8 w-auto items-center justify-between rounded-lg bg-blueSecondary sm:p-3 p-1 text-xs sm:text-base font-bold text-white dark:bg-brandLinear dark:text-[#000]">
            Edit
          </button>
        ) : <button
          className="flex my-2 h-5 sm:h-8 w-auto items-center justify-between rounded-lg bg-blueSecondary sm:p-3 p-1 text-xs sm:text-base font-bold text-white dark:bg-brandLinear dark:text-[#000]"
          onClick={handleInvite}
        >
          Accept Invite
        </button>}
      </div>


    </div>
  )
}
export default CollabList;
