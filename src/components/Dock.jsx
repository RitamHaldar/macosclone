import React from 'react'
import "./Dock.scss"
const dock = ({ setwindowState }) => {
    return (
        <footer className='dock'>
            <div
                onClick={state => { setwindowState({ ...state, github: true }) }}
                className="icon github">
                <img src="/dockicons/github.svg" alt="" />
            </div>
            <div
                onClick={state => { setwindowState({ ...state, note: true }) }}
                className="icon note">
                <img src="/dockicons/note.svg" alt="" />
            </div>
            <div
                onClick={state => { setwindowState({ ...state, resume: true }) }}
                className="icon pdf">
                <img src="/dockicons/pdf.svg" alt="" />
            </div>
            <div
                onClick={() => { window.open("https://calendar.google.com/", "_blank") }}
                className="icon calender">
                <img src="/dockicons/calender.svg" alt="" />
            </div>
            <div
                onClick={state => { setwindowState({ ...state, spotify: true }) }}
                className="icon spotify">
                <img src="/dockicons/spotify.svg" alt="" />
            </div>
            <div
                onClick={() => { window.open("https://mail.google.com/mail/?view=cm&fs=1&to=sample@example.com", "_blank") }}
                className="icon mail">
                <img src="/dockicons/mail.svg" alt="" />
            </div>
            <div
                onClick={() => { window.open("https://in.linkedin.com/", "_blank") }}
                className="icon link">
                <img src="/dockicons/link.svg" alt="" />
            </div>
            <div
                onClick={state => { setwindowState({ ...state, cli: true }) }}
                className="icon cli">
                <img src="/dockicons/cli.svg" alt="" />
            </div>
        </footer>
    )
}

export default dock