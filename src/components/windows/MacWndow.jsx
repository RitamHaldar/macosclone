import React from 'react'
import { Rnd } from 'react-rnd'
import "./macwindow.scss"
const MacWndow = ({ children, windowname, setwindowState }) => {
    return (
        <Rnd
            default={{
                height: "60vh",
                width: "40vw",
                x: 150,
                y: 200
            }}>
            <div className="window">
                <nav>
                    <div className="options">
                        <div onClick={state => { setwindowState({ ...state, windowname: false }) }} className="red dot"></div>
                        <div className="yellow dot"></div>
                        <div className="green dot"></div>
                    </div>
                    <div className="title">ritamhaldar - zsh</div>
                </nav>
                <section>
                    {children}
                </section>
            </div>
        </Rnd>
    )
}

export default MacWndow