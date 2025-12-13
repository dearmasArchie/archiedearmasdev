import React from 'react';
import './name-part.css';
import formalPicture from '../../assets/formal-picture.png';

function NamePart() {
    return (
    <div className='side-space'>
      <div className='parent-namepart'>
        <div className='left-top'>
          <p>Hello I'm</p>
          <h1 className='name'>ARCHIE DE ARMAS</h1> 
        </div>

        <div className='right-side'>
          <img src={formalPicture} alt="Archie De Armas"/>
        </div>

        <div className='left-bottom'> 
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </div>
    </div>
    );

}
export default NamePart;