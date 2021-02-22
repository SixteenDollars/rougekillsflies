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
import flower from '../resources/videos/08-08.m4v'

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
				<ul class="img_list">
				<li>
						<figure>
						<ReactPlayer
							class="col-xs-12"
							url="https://www.youtube.com/watch?v=UTDQnOqUe-Q" 
							controls
						/>
						</figure>
					</li>
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