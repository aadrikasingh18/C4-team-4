import React, { useEffect, useState } from 'react'
import { useCallback } from "react";
import Quill from 'quill';
import 'quill/dist/quill.snow.css';

//const SAVE_INTERVAL_MS = 2000
const TOOLBAR_OPTIONS = [
    // [{ header: [1, 2, 3, 4, 5, 6, false] }],
    //font size
    [{size: ["small","large","huge",false]}],
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

    const [quill, setQuill] = useState()

    // Backend code (Socket) with delta integration for real time editing

    // const { id: documentId } = useParams()
    // const [socket, setSocket] = useState()
    // useEffect(() => {
    //     const s = io("http://localhost:3001")
    //     setSocket(s)
    
    //     return () => {
    //       s.disconnect()
    //     }
    //   }, [])
    
    //   useEffect(() => {
    //     if (socket == null || quill == null) return
    
    //     socket.once("load-document", document => {
    //       quill.setContents(document)
    //       quill.enable()
    //     })
    
    //     socket.emit("get-document", documentId)
    //   }, [socket, quill, documentId])
    
    //   useEffect(() => {
    //     if (socket == null || quill == null) return
    
    //     const interval = setInterval(() => {
    //       socket.emit("save-document", quill.getContents())
    //     }, SAVE_INTERVAL_MS)
    
    //     return () => {
    //       clearInterval(interval)
    //     }
    //   }, [socket, quill])
    
    //   useEffect(() => {
    //     if (socket == null || quill == null) return
    
    //     const handler = delta => {
    //       quill.updateContents(delta)
    //     }
    //     socket.on("receive-changes", handler)
    
    //     return () => {
    //       socket.off("receive-changes", handler)
    //     }
    //   }, [socket, quill])
    
    //   useEffect(() => {
    //     if (socket == null || quill == null) return
    
    //     const handler = (delta, oldDelta, source) => {
    //       if (source !== "user") return
    //       socket.emit("send-changes", delta)
    //     }
    //     quill.on("text-change", handler)
    
    //     return () => {
    //       quill.off("text-change", handler)
    //     }
    //   }, [socket, quill])


    const wrapperRef = useCallback((wrapper) => {
        if (wrapper == null) return
        wrapperRef.innerHTML = ""

        const editor = document.createElement("div");
        wrapper.append(editor);
        const q = new Quill(editor, { theme: "snow", modules: { toolbar: TOOLBAR_OPTIONS }}) //Toolbar on the top
        const b = new Quill(editor, { theme: "bubble", modules: { toolbar: TOOLBAR_OPTIONS_1 }}) //Tooltip for mini editing
        setQuill(q);
        setQuill(b);
    }, [])
    return (
        <div className="texteditor w-full rounded-md p-2" ref={wrapperRef}></div>
    )
}

export default TextEditor


