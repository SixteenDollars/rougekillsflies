import ReactPlayer from 'react-player'
import React, { Component } from 'react'
import './Homepage.css';
import apple from '../resources/images/apple-music.png'
import bandcamp from '../resources/images/BandcampHoriz.png'
import soundcloud from '../resources/images/SoundcloudReg.png'
import spotify from '../resources/images/spotify.png'
import tidal from '../resources/images/tidal.png'
import pandora from '../resources/images/pandora.png'
import me from '../resources/images/me.png'
import ig from '../resources/images/ig.png'
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom'

class Homepage extends Component {

	render() {
		const loveharturi = "spotify:album:6ITBoE1l1zPCtXKOTN12IC";
		const size = {
			width: '50%',
			height: 350
		};
		const view = 'list'; // or 'coverart'
		const theme = 'black'; // or 'white'
		return (
			
			<div id="homePage">
				<div class="container">
					<div class="row">
						<div class="col">
							<Link to="/journal" style={{ textDecoration: 'none' }}>
								<p class="text-left" id="head"> HALF OF HEAVEN IS A HOME </p>
							</Link>
						</div>
					</div>

					<div class="row justify-content-center align-items-center">
						<div class="col-sm-12 col-6" id="title4">
							<p class="text-center">German occupation. (2020)</p>
						</div>
					</div>

					<div id="logos" class="row justify-content-center align-items-center">
						<div class="col-sm-2 col-md-2 col-4">
							<a href="https://rougedied.bandcamp.com/track/german-occupation">
								<img class="img-fluid" id="bandcamp" src={bandcamp} alt=""></img>
							</a>
						</div>
						<div class="col-sm-2 col-md-2 col-4">
							<a href="http://soundcloud.com/rougeisdead/german-occupation">
								<img class="img-fluid" id="soundcloud" src={soundcloud} alt=""></img>
							</a>
						</div>
					</div>

					<div class="row justify-content-center align-items-center" id="youtube-player">
						<ReactPlayer
							class="col-xs-12"
							url="https://youtu.be/ZtHvmAhWW5s" 
							playing 
							controls
						/>
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
							src={`https://embed.spotify.com/?uri=${loveharturi}&view=${view}&theme=${theme}`}
							width={size.width}
							height={size.height}
							frameBorder="0"
							allowtransparency="true"
						/>
					</div>

					<div class="row justify-content-center align-items-center">
						<div class="col-sm-12 col-6" id="title"><p class="text-center">STOP tweakin' (2018)</p></div>
					</div>
					<div class="row justify-content-center align-items-center" id="soundcloud-player">
						<ReactPlayer
							class="col-sm-7"
							url='https://soundcloud.com/rougeisdead/sets/stoptweakin'
						/>
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

export default Homepage;