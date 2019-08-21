import ReactPlayer from 'react-player'
import React, { Component } from 'react'
import './App.css';
import apple from './resources/images/apple-music.png'
import spotify from './resources/images/spotify.png'
import tidal from './resources/images/tidal.png'
import pandora from './resources/images/pandora.png'
import me from './resources/images/me.png'
import ig from './resources/images/ig.png'
import sc from './resources/images/sc.png'
import 'bootstrap/dist/css/bootstrap.css';

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
			<div id="page">
				<div class="container">
					<div class="position-absolute" >
						<p class="text-left" id="head"> HALF OF HEAVEN IS A HOME </p>
					</div>
					<div class="row">
						<div class="col-lg col-lg-push-12" id="title"><p class="text-center">STOP tweakin' (2018)</p></div>
					</div>
					<div class="row justify-content-center align-items-center" id="soundcloud-player">
						<ReactPlayer
							class="col-lg-7"
							url='https://soundcloud.com/rougeisdead/sets/stoptweakin'
							playing />
					</div>
					<div class="row">
						<div class="col-lg" id="title1">
							<p class="text-center">F**KMONDAY's (from LoveHart Compilation Album) (2019)</p>
						</div>
					</div>

					<div id="logos" class="row justify-content-center align-items-center">
						<div class="col-lg-1">
							<a href="https://listen.tidal.com/album/107846023">
								<img class="img-fluid" id="tidal" src={tidal} alt=""></img>
							</a>
						</div>

						<div class="col-lg-1">
							<a href="https://geo.music.apple.com/us/album/_/1460176267?mt=1&app=music&at=1000lHKX">
								<img class="img-fluid" id="apple" src={apple} alt=""></img>
							</a>
						</div>

						<div class="col-lg-1">
							<a href="https://open.spotify.com/album/6ITBoE1l1zPCtXKOTN12IC">
								<img class="img-fluid" id="spotify" src={spotify} alt=""></img>
							</a>
						</div>
						<div class="col-lg-1">
							<a href="https://www.pandora.com/artist/various-artists/love-hart-presents-hartfm-explicit/AL2V7Pb7xcg7p74">
								<img class="img-fluid" id="pandora" src={pandora} alt=""></img>
							</a>
						</div>
					</div>

					<div class="row justify-content-center align-items-center">
						<iframe
							class="col-lg-6"
							title="spotify"
							id="spotify-player"
							src={`https://embed.spotify.com/?uri=${uri}&view=${view}&theme=${theme}`}
							width={size.width}
							height={size.height}
							frameBorder="0"
							allowtransparency="true"
						/>

					</div>

					<div class="row justify-content-center align-items-center">
						<div class="col-lg" id="title2">
							<p class="text-center">me + ur moms in the background</p>
						</div>
					</div>

					<div class="row justify-content-center align-items-center">
						<img class="col-lg-4" id="me" src={me} alt="">
						</img>
					</div>

					<div class="row justify-content-center align-items-center">
						<div class="col-lg-1">
							<a href="https://www.instagram.com/rougedied">
								<img id="ig" class="img-fluid" src={ig} alt=""></img>
							</a>
						</div>
					</div>

				</div>

			</div>
		);
	}
}
export default App;
