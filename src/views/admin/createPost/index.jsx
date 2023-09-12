import React from 'react'
import TextEditor from './components/TextEditor';
import AddModal from './components/AddModal';
import { MdOutlineSave } from 'react-icons/md';


const NewPost = () => {
    return ( 
        <div className="flex justify-center flex-col w-full overflow-hidden">
          <div  className=' flex items-center justify-between p-4 '>
            <div className="flex">
              <AddModal/>
              <button className="flex items-center justify-between text-white dark:text-[#000] px-4 py-2 w-auto h-10 bg-blueSecondary dark:bg-brandLinear rounded-lg font-bold">
                <MdOutlineSave className=" mr-2 " /> 
                <div className="">Save Draft</div>
              </button>
            </div>
          </div>
          <TextEditor/>
        </div>
      )
    }
   


export default NewPost;
