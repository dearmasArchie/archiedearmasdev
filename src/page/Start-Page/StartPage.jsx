import React from 'react';
import BackGround from '../../components/background/BackGround';
import './start-page.css';

function StartPage() {
    return (
        <>
        <main className="startpage-root">
        <BackGround>
        <div className="parent">
          <div className="name-div">
            <h1 className="title">Hi, Archie</h1>
            {/* <p className="subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est laboriosam repudiandae voluptatibus eos illo optio quo qui, asperiores fugit accusamus error veritatis ipsa quos ullam dicta incidunt sapiente ratione? Incidunt!.</p>  */}
          </div>
          <div className="img-div"> 
            {/* <img src={ChoiJisu} alt=""/>  */}
            <img src="https://i.pinimg.com/736x/27/75/12/2775124b4c0d510a86abb626610f224b.jpg" alt=""/> 
          </div>
          <div className="link-div"> 
            <div className='socials'>
              <h1>Socials</h1>
              <a href="https://www.facebook.com/" target="_blank" >Facebook</a>
              <a href="https://www.twitter.com/" target="_blank" >Twitter</a>
              <a href="https://www.instagram.com/" target="_blank" >Instagram</a>
              <a href="https://www.youtube.com/" target="_blank" >Youtube</a>
              <a href="https://www.twitch.com/" target="_blank" >Twitch</a>
              <a href="https://www.gmail.com/" target="_blank" >Gmail</a>
            </div>
              <div className='esports'>
              <h1>(E)Sports</h1>
              <a href="https://www.google.com/search?q=nba+games+today&oq=&gs_lcrp=EgZjaHJvbWUqBggCEEUYOzIGCAAQRRg8MgwIARAuGCcYgAQYigUyBggCEEUYOzIGCAMQRRhAMgYIBBBFGDwyBggFEEUYPTIGCAYQRRg9MgYIBxBFGEHSAQgxNDIzajBqN6gCALACAA&sourceid=chrome&ie=UTF-8" target="_blank" >NBA Games</a>
              <a href="https://www.vipleague.pm/basketball-sports-stream#" target="_blank" >NBA Stream</a>
              <a href="https://liquipedia.net/valorant/Main_Page" target="_blank" >Liquipedia</a>
              <a href="https://tracker.gg/valorant" target="_blank" >Valorant Tracker</a>
              <a href="https://tftactics.gg/tierlist/team-comps/" target="_blank" >TFTactics</a>
              <a href="https://www.metatft.com/items/artifact" target="_blank" >metatft</a>
            </div>
              <div className='general'>
              <h1>General</h1>
              <a href="https://www.nytimes.com/games/connections" target="_blank" >Connections</a>
              <a href="https://bulsu.heims.ph/" target="_blank" >Bulsu Portal</a>
              <a href="https://drive.google.com/drive/my-drive" target="_blank" >G-Drive</a>
              <a href="https://docs.google.com/document/u/0/" target="_blank" >Docs</a>
              <a href="https://xprime.today/" target="_blank" >Watch Friends</a>
              <a href="https://chatgpt.com/" target="_blank" >Chatgpt</a>
            </div>
          </div>
        </div>
        </BackGround>
        </main>
        </>
    );
}   

export default StartPage;