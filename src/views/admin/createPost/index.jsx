import React from 'react'
import TextEditor from './components/TextEditor';
import AddModal from './components/AddModal';


const NewPost = () => {
    return ( 
        <div className="flex justify-center flex-col w-full overflow-hidden">
          <div  className=' flex items-center justify-between p-4 '>
            <div className="flex">
              <AddModal/>
            </div>
          </div>
          <TextEditor/>
        </div>
      )
    }
   


export default NewPost;
