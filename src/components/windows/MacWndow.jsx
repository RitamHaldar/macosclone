import React, { useState } from 'react'
import { Rnd } from 'react-rnd'
import "./macwindow.scss"

const MacWndow = ({ children, windowname, setwindowState }) => {
    const [size, setSize] = useState({ width: "40vw", height: "50vh" });
    const [position, setPosition] = useState({ x: 150, y: 100 });

    const handleClose = () => {
        setwindowState(prev => ({ ...prev, [windowname]: false }));
    };

    const handleMinimize = () => {
        setSize({ width: "40vw", height: "50vh" });
        setPosition({ x: 150, y: 100 });
    };

    const handleMaximize = () => {
        setSize({ width: "100vw", height: "100vh" });
        setPosition({ x: 0, y: 0 });
    };

    const isMaximized = size.width === "100vw";

    return (
        <Rnd
            size={size}
            position={position}
            disableDragging={isMaximized}
            enableResizing={!isMaximized}
            dragHandleClassName="window-nav"
            bounds="main"
            onDragStop={(e, d) => {
                setPosition({ x: d.x, y: d.y });
            }}
            onResizeStop={(e, direction, ref, delta, position) => {
                setSize({
                    width: ref.style.width,
                    height: ref.style.height,
                });
                setPosition(position);
            }}
        >
            <div className={`window ${isMaximized ? 'maximized' : ''}`}>
                <nav className="window-nav">
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
