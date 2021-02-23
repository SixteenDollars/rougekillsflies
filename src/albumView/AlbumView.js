import React, { Component } from 'react'
import './AlbumView.css';
import ig from '../resources/images/ig.png'
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom'
import war from '../resources/images/cover.png'
import misc from '../resources/images/misc.png'
import plant from '../resources/images/TR.png'
import shoot1 from '../resources/images/shoot1.JPG'
import ReactPlayer from 'react-player'
import spotifyblack from '../resources/images/spotifyblack.png'
import appleblack from '../resources/images/appleblack.png'
import tidalblackcircle from '../resources/images/tidalblackcircle.png'
import bcblack from '../resources/images/bcblack.png'

class AlbumView extends Component {

	componentDidMount() {
		// const circleType = new CircleType(document.getElementById("circleText")).radius(55);
	}

	render() {
		return (
			<main class="albumView">
				<nav>
					<a href="https://rougedied.com"><h1 id="header">HOME</h1></a>
					<a href="https://rougedied.com/contact"><h1 id="header">CONTACT</h1></a>
				</nav>
				<div class="album-text">
					<h1 class="album-title">"WAR!" by Rouge (an album)</h1>
				</div>
				<div class="logos" class="row justify-content-center align-items-center">
						<div class="col-sm-1 col-md-1 col-2">
							<a href="https://geo.music.apple.com/us/album/_/1460176267?mt=1&app=music&at=1000lHKX">
								<img class="img-fluid" id="applewar" src={appleblack} alt=""></img>
							</a>
						</div>
						<div class="col-sm-1 col-md-1 col-2">
							<a href="https://open.spotify.com/album/6ITBoE1l1zPCtXKOTN12IC">
								<img class="img-fluid" id="spotifywar" src={spotifyblack} alt=""></img>
							</a>
						</div>
						<div class="col-sm-1 col-md-1 col-2">
							<a href="https://listen.tidal.com/album/107846023">
								<div class="img-max">
									<img class="img-fluid" id="tidalwar" src={tidalblackcircle} alt=""></img>
								</div>
							</a>
						</div>
						<div class="col-sm-1 col-md-1 col-2">
							<a href="https://www.pandora.com/artist/various-artists/love-hart-presents-hartfm-explicit/AL2V7Pb7xcg7p74">
								<img class="img-fluid" id="bcwar" src={bcblack} alt=""></img>
							</a>
						</div>
					</div>
				<div class="youtube-player">
					<ReactPlayer
						url="https://www.youtube.com/watch?v=UTDQnOqUe-Q"
						controls
					/>
				</div>
				<ul class="img_list">
					<li>
						<figure>
							<a href="https://www.instagram.com">
								<img src={war} alt="WAR!"></img>
							</a>
						</figure>
					</li>
					<li>
						<figure>
							<a href="https://www.rougedied.com/misc">
								<img src={misc} alt="Misc"></img>
							</a>
						</figure>
					</li>
					<li>
						<figure>
							<a href="https://www.instagram.com">
								<img src={shoot1} alt="Shoot1"></img>
							</a>
						</figure>
					</li>
				</ul>
				<a href="https://www.instagram.com/rougedied">
					<img id="ig" class="mx-auto d-block" src={ig} alt=""></img>
				</a>
			</main>
		);
	}
}

export default AlbumView;