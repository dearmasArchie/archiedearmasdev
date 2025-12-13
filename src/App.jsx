import React from 'react';
import './index.css';
import NavBar from './components/NavBar/NavBar';
import NamePart from './components/NamePart/NamePart';
import StartPage from './page/Start-Page/StartPage';
// import SpotifyPart from './components/spotify-part/SpotifyPart';
import { BrowserRouter, Routes, Route } from 'react-router';


function App() {

  return (
    <>
    {/* <NavBar />
    <NamePart /> */}
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<NamePart />} />
        <Route path='/StartPage' element={<StartPage />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
