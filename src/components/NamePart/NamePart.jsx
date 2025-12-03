import React from 'react';
import './name-part.css';
import formalPicture from '../../assets/formal-picture.jpg';

function NamePart() {
    return (
    <div className='side-space'>
      <div className='left-side'>
        <p>Hello I'm</p>
        <h1 className='name'>ARCHIE DE ARMAS</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>

      <div className='right-side'>
        <img src={formalPicture} alt="Archie De Armas"/>
      </div>
    </div>
    );

}
export default NamePart;