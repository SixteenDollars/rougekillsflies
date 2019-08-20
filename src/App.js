import ReactPlayer from 'react-player'
import React, { Component } from 'react'
import './App.css';
import apple from './resources/images/apple-music.png'
import spotify from './resources/images/spotify.png'
import tidal from './resources/images/tidal.png'
import pandora from './resources/images/pandora.png'

class App extends Component {
	render() {
		const uri = "spotify:album:6ITBoE1l1zPCtXKOTN12IC";
		const size = {
			width: '30%',
			height: 350
		  };
		  const view = 'list'; // or 'coverart'
		  const theme = 'black'; // or 'white'
		return (
      <div>
		<p id="title">STOP tweakin' (2018)</p>
		<ReactPlayer 
			id="soundcloud-player" 
			url='https://soundcloud.com/rougeisdead/sets/stoptweakin' 
			playing />
		<p id="title1">F**KMONDAY's (from LoveHart Compilation Album) (2019)</p>
		<iframe
			title="spotify"
        	id="spotify-player"
        	src={`https://embed.spotify.com/?uri=${uri}&view=${view}&theme=${theme}`}
        	width={size.width}
        	height={size.height}
        	frameBorder="0"
        	allowtransparency="true"
      	/>
		  <a href="https://geo.music.apple.com/us/album/_/1460176267?mt=1&app=music&at=1000lHKX">
			  <img id="apple" src={apple} alt=""></img>
		  </a>
		  <a href="https://open.spotify.com/album/6ITBoE1l1zPCtXKOTN12IC">
			  <img id="spotify" src={spotify} alt=""></img>
		  </a>
		  <a href="https://www.pandora.com/artist/various-artists/love-hart-presents-hartfm-explicit/AL2V7Pb7xcg7p74">
			  <img id="pandora" src={pandora} alt=""></img>
		  </a>
		  <a href="https://listen.tidal.com/album/107846023">
			  <img id="tidal" src={tidal} alt=""></img>
		  </a>


      </div>

		);
	}
}
export default App;
