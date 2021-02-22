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
import tidalblack from '../resources/images/tidalblack.png'
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
				<div class="youtube-player">
					<ReactPlayer
						url="https://www.youtube.com/watch?v=UTDQnOqUe-Q"
						controls
					/>
				</div>
				<div id="logos">
					<div id="appleblack">
						<img class="img-fluid" src={appleblack} alt=""></img>
					</div>
					<div id="spotifyblack">
						<img class="img-fluid" src={spotifyblack} alt=""></img>
					</div>
					<div id="bcblack">
						<img class="img-fluid" src={bcblack} alt=""></img>
					</div>
				</div>
				<div class="album-text">
					<h1 class="album-title">"WAR!" by Rouge</h1>
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