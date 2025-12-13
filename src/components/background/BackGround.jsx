import React from 'react';
import './background.css';
import videoBG from '../../assets/videoBG.mp4';

const BackGround = ({ children }) => {
    return (
        <div className="bg-container">
            <video className="bg-video" src={videoBG} autoPlay loop muted playsInline />
            <div className="bg-overlay">
                {children}
            </div>
        </div>
    );
}

export default BackGround;