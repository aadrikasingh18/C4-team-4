import React, { useEffect, useState } from 'react'
import { useCallback } from "react";
import Quill from 'quill';
import 'quill/dist/quill.snow.css';

//const SAVE_INTERVAL_MS = 2000
const TOOLBAR_OPTIONS = [
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    [{ font: [] }],
    [{ list: "ordered" }, { list: "bullet" }],
    ["bold", "italic", "underline", "strike"],
    [{ color: [] }, { background: [] }],
    //indentation
    [{ indent:"+1"}, {indent:"-1"}],
    //sub and super script
    [{ script: "sub" }, { script: "super" }],
    //alignment 
    [{ align: [] }],
    //font size
    [{size: ["small","large","huge",false]}],
    ["image", "blockquote", "code-block"],
    ["clean"],
]
const TOOLBAR_OPTIONS_1 = [
    
    //font size
    [{size: ["small","large","huge",false]}],
    [{ font: [] }],
    ["bold", "italic", "underline"],
    [{ color: [] }, { background: [] }],
    //alignment 
    [{ align: [] }],
]

const TextEditor = () => {
    // const { id: documentId } = useParams()
    // const [socket, setSocket] = useState()
    const [quill, setQuill] = useState()

    // useEffect(() => {
    //     const s = io("http://localhost:3001")
    //     setSocket(s)

    //     return () => {
    //       s.disconnect()
    //     }
    //   }, [])
    // useEffect(()=>{
    //     quill.on('text-change', (delta, oldDelta, source)=>{
    //         if(source !== 'user') return

    //         //
    //     }) 
    // })


    const wrapperRef = useCallback((wrapper) => {
        if (wrapper == null) return
        wrapperRef.innerHTML = ""

        const editor = document.createElement("div");
        wrapper.append(editor);
        const q = new Quill(editor, { theme: "snow", modules: { toolbar: TOOLBAR_OPTIONS }})
        const b = new Quill(editor, { theme: "bubble", modules: { toolbar: TOOLBAR_OPTIONS_1 }})
        setQuill(q);
        setQuill(b);
    }, [])
    return (
        <div className="texteditor w-full rounded-md p-2" ref={wrapperRef}></div>
    )
}

export default TextEditor


