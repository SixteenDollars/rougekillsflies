import ReactPlayer from 'react-player'
import React, { Component } from 'react'
import './App.css';
import apple from './resources/images/apple-music.png'
import spotify from './resources/images/spotify.png'
import tidal from './resources/images/tidal.png'
import pandora from './resources/images/pandora.png'
import me from './resources/images/me.png'
import ig from './resources/images/ig.png'
import song from './resources/songs/song.m4a'
import 'bootstrap/dist/css/bootstrap.css';
import ReactAudioPlayer from 'react-audio-player';

class App extends Component {

	render() {
		const uri = "spotify:album:6ITBoE1l1zPCtXKOTN12IC";
		const size = {
			width: '50%',
			height: 350
		};
		const view = 'list'; // or 'coverart'
		const theme = 'black'; // or 'white'
		return (
			<div id="page">
				<div class="container">
					<div class="row">
						<div class="col">
							<p class="text-left" id="head"> HALF OF HEAVEN IS A HOME </p>
						</div>
					</div>
					<div class="row justify-content-center align-items-center">
						<div class="col-sm-12 col-6" id="title"><p class="text-center">STOP tweakin' (2018)</p></div>
					</div>
					<div class="row justify-content-center align-items-center" id="soundcloud-player">
						<ReactPlayer
							class="col-sm-7"
							url='https://soundcloud.com/rougeisdead/sets/stoptweakin'
							playing />
					</div>
					<div class="row justify-content-center align-items-center">
						<div class="col-sm-12 col-6" id="title1">
							<p class="text-center">F**KMONDAY's (from LoveHart Compilation Album) (2019)</p>
						</div>
					</div>

					<div id="logos" class="row justify-content-center align-items-center">
						<div class="col-sm-1 col-md-1 col-2">
							<a href="https://listen.tidal.com/album/107846023">
								<div class="img-max">
									<img class="img-fluid" id="tidal" src={tidal} alt=""></img>
								</div>
							</a>
						</div>
						<div class="col-sm-1 col-md-1 col-2">
							<a href="https://geo.music.apple.com/us/album/_/1460176267?mt=1&app=music&at=1000lHKX">
								<img class="img-fluid" id="apple" src={apple} alt=""></img>
							</a>
						</div>
						<div class="col-sm-1 col-md-1 col-2">
							<a href="https://open.spotify.com/album/6ITBoE1l1zPCtXKOTN12IC">
								<img class="img-fluid" id="spotify" src={spotify} alt=""></img>
							</a>
						</div>
						<div class="col-sm-1 col-md-1 col-2">
							<a href="https://www.pandora.com/artist/various-artists/love-hart-presents-hartfm-explicit/AL2V7Pb7xcg7p74">
								<img class="img-fluid" id="pandora" src={pandora} alt=""></img>
							</a>
						</div>
					</div>

					<div class="row justify-content-center align-items-center">
						<iframe
							class="col-xs"
							title="spotify"
							src={`https://embed.spotify.com/?uri=${uri}&view=${view}&theme=${theme}`}
							width={size.width}
							height={size.height}
							frameBorder="0"
							allowtransparency="true"
						/>

					</div>

{/* 					<div class="row justify-content-center align-items-center">
						<div class="col-sm-12 col-6" id="title3">
							<p class="text-center">dollartree (rough demo) (w/ khaji, atlas, ryanwise) (2019) </p>
						</div>
					</div>

					<div class="row justify-content-center align-items-center" id="soundcloud-player">
						<ReactAudioPlayer
							class="col-xs-12"
							id = "play"
							src={song}
							autoPlay
							controls
						/>
					</div> */}

					<div class="row justify-content-center align-items-center">
						<div class="col-xs-12" id="title2">
							<p class="text-center">me + ur moms in the background</p>
						</div>
					</div>

					<div class="row">
						<div class="col-xs col-cent">
							<img id="me" class="mx-auto d-block" src={me} alt=""></img>
						</div>
					</div>

					<div class="row">
						<div class="col-xs col-cent">
							<a href="https://www.instagram.com/rougedied">
								<img id="ig" class="mx-auto d-block" src={ig} alt=""></img>
							</a>
						</div>
					</div>

				</div>
			</div>
		);
	}
}
export default App;
