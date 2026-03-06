import React, { useEffect, useState } from 'react'
import MacWndow from './MacWndow'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { atelierDuneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import "./notes.scss"


const Notes = ({ windowname, setwindowState }) => {
    const [notes, setNotes] = useState("")
    useEffect(() => {
        fetch("/notes.txt").then(res => res.text()).then(data => setNotes(data))
    }, [])
    return (
        <MacWndow windowname={windowname} setwindowState={setwindowState}>
            <div className="notes-container">
                {notes ? <SyntaxHighlighter language="javascript" style={atelierDuneDark}>{notes}</SyntaxHighlighter> : "Loading..."}
            </div>
        </MacWndow>
    )
}

export default Notes