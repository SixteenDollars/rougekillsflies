import ReactPlayer from 'react-player'
import React, { Component } from 'react'
import './Homepage.css';
import apple from '../resources/images/apple-music.png'
import bandcamp from '../resources/images/BandcampHoriz.png'
import soundcloud from '../resources/images/SoundcloudReg.png'
import spotify from '../resources/images/spotify.png'
import tidal from '../resources/images/tidal.png'
import pandora from '../resources/images/pandora.png'
import ig from '../resources/images/ig.png'
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom'
import war from '../resources/images/cover.png'
import misc from '../resources/images/misc.png'
import plant from '../resources/images/plant.png'
import shoot from '../resources/images/shoot.jpeg'
import CircleType from "circletype";
import flower from '../resources/videos/08-08.m4v'

class Homepage extends Component {

	componentDidMount() {
		// const circleType = new CircleType(document.getElementById("circleText")).radius(55);
	}

	render() {
		return (
			<div id="homePage">
				<div class="container">
					<div class="row">
						<div class="col">
							<p class="text-left" id="head"> HALF OF HEAVEN IS A HOME </p>
						</div>

{/* 						<div class="col">
							<div class="circular-text">
								<div id="rotating">
									<span id="circleText">
										THE • WORLD • IS • YOURS • AND • EVERYTHING • IN • IT •
								</span>
								</div>
							</div>
						</div> */}
					</div>

					<div id="grid">
						<div id="box on1">
							<div id="box1x1">
								<Link to="/war">
									{<img class="img-fluid" src={war} alt=""></img>}
								</Link>
							</div>
						</div>
						<div id="box one2">
							<div id="box1x2">
								<Link to="/misc">
									{<img class="img-fluid" src={misc} alt=""></img>}
								</Link>
							</div>
						</div>
						<div id="box one3">
							<div id="box1x3">
								<div id="video-container">
									<ReactPlayer
										id="video-player"
										playing
										url={flower}
										width='100%'
										height='100%'
										muted={true}
										loop
									/>
								</div>
							</div>
						</div>
						<div id="box two1">
							<div id="box2x1">
								<Link to="/video">
									{<img class="img-fluid" src={plant} alt=""></img>}
								</Link>
							</div>
						</div>
						<div id="box two2">
							<div id="box2x2">
								<Link to="/shoot">
									{<img class="img-fluid" src={shoot} alt=""></img>}
								</Link>
							</div>
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

export default Homepage;