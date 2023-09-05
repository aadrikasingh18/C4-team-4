import React from 'react'
import "quill/dist/quill.snow.css"
import { useCallback} from "react";
import Quill from 'quill';
import 'quill/dist/quill.snow.css';

const SAVE_INTERVAL_MS = 2000
const TOOLBAR_OPTIONS = [
  [{ header: [1, 2, 3, 4, 5, 6, false] }],
  [{ font: [] }],
  [{ list: "ordered" }, { list: "bullet" }],
  ["bold", "italic", "underline"],
  [{ color: [] }, { background: [] }],
  [{ script: "sub" }, { script: "super" }],
  [{ align: [] }],
  ["image", "blockquote", "code-block"],
  ["clean"],
]


const TextEditor = () => {
    const wrapperRef= useCallback((wrapper)=>{
        if(wrapper==null) return
        wrapperRef.innerHTML=""

        const editor=document.createElement("div");
        wrapper.append(editor);
        new Quill(editor,{theme: "snow", modules: {toolbar: TOOLBAR_OPTIONS}})
    },[])
    return (
        <div className="texteditor w-10/12 rounded-md" ref={wrapperRef}></div>
    )
}

export default TextEditor


