import React from 'react';
import './nav-bar.css';
import archieveLogo from '../../assets/archie-logo.png';

function NavBar() {
    return (
        <nav className='navbar'>
            <div className='myname'>
                <img src={archieveLogo} alt="logo" />
            </div>

            <div className='navigation'>
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>
            </div>

            <div className='buttons'>
                <a href="https://www.facebook.com/archie.dearmas" target='_blank'><button className='FaceBookbtn'>FaceBook</button></a>
                <a href="https://www.instagram.com/archieqt3.14/" target='_blank'><button className='Instagrambtn'>Instagram</button></a>
            </div>
        </nav>
    );
}   

export default NavBar;