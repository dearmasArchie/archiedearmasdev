// ...existing code...
import React, { useState } from 'react';
import './nav-bar.css';
import archieveLogo from '../../assets/archie-logo.png';

function NavBar() {
    const [open, setOpen] = useState(false);

    const toggle = () => setOpen(prev => !prev);
    const close = () => setOpen(false);

    return (
        <nav className='navbar'>
            <div className='myname'>
                <img src={archieveLogo} alt="logo" />
            </div>

            <button
                className={`hamburger ${open ? 'is-open' : ''}`}
                aria-label="Toggle navigation"
                aria-expanded={open}
                onClick={toggle}
            >
                <span className="bar" />
                <span className="bar" />
                <span className="bar" />
            </button>

            <div className={`navigation ${open ? 'open' : ''}`}>
                <a href="#home" onClick={close}>Home</a>
                <a href="#about" onClick={close}>About</a>
                <a href="#projects" onClick={close}>Projects</a>
                <a href="#contact" onClick={close}>Contact</a>
            </div>

            <div className={`buttons ${open ? 'open' : ''}`}>
                <a href="https://www.facebook.com/archie.dearmas" target='_blank' rel="noreferrer"><button className='FaceBookbtn' onClick={close}>FaceBook</button></a>
                <a href="https://www.instagram.com/archieqt3.14/" target='_blank' rel="noreferrer"><button className='Instagrambtn' onClick={close}>Instagram</button></a>
            </div>
        </nav>
    );
}

export default NavBar;
// ...existing code...