import React, { useState } from 'react'
import { Rnd } from 'react-rnd'
import "./macwindow.scss"

const MacWndow = ({ children, windowname, setwindowState }) => {
    const [width, setwidth] = useState("40vw");
    const [height, setheight] = useState("50vh");
    const handleClose = () => {
        setwindowState(prev => ({ ...prev, [windowname]: false }));
    };

    const handleMinimize = () => {
        setwidth("40vw");
        setheight("50vh")
    };

    const handleMaximize = () => {
        setwidth("100vw");
        setheight("100vh")
    };

    return (
        <Rnd
            size={{ width: width, height: height }}
            position={width == "100vw" ? { x: 0, y: 0 } : { x: 150, y: 200 }}
            disableDragging={Boolean(width == "100vw")}
            enableResizing={!Boolean(width == "100vw")}
            default={{
                height: height,
                width: width,
                x: 150,
                y: 200
            }}>
            <div className={`window ${width == "100vw" ? 'maximized' : ''}`}>
                <nav>
                    <div className="options">
                        <div onClick={handleClose} className="red dot"></div>
                        <div onClick={handleMinimize} className="yellow dot"></div>
                        <div onClick={handleMaximize} className="green dot"></div>
                    </div>
                    <div className="title">ritamhaldar - {windowname}</div>
                </nav>
                <section>
                    {children}
                </section>
            </div>
        </Rnd>
    )
}

export default MacWndow
