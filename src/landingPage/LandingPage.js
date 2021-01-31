import React, { Component } from 'react'
import './LandingPage.css';
import 'bootstrap/dist/css/bootstrap.css';
import appleblack from '../resources/images/appleblack.png'
import bcblack from '../resources/images/bcblack.png'
import spotifyblack from '../resources/images/spotifyblack.png'
import pause from '../resources/images/pause.png'
import play from '../resources/images/play.png'
import flower from '../resources/videos/08-08.m4v'
import ReactPlayer from 'react-player'
import CircleType from "circletype";
import { Link } from 'react-router-dom'

class LandingPage extends Component {
	constructor(props) {
		super(props);
		this.addActiveTrack = this.addActiveTrack.bind(this);
		this.track1 = new Audio('songs/Closest Master.wav');
		this.track2 = new Audio('songs/Bomb Master.wav');
		this.track3 = new Audio('songs/Dead Men Master.wav');
		this.track4 = new Audio('songs/Kill or King Me Master.wav');
		this.track5 = new Audio('songs/God Send God Speed Master.wav');
		this.track6 = new Audio('songs/Shame Master.wav');
		this.track7 = new Audio('songs/No Not Magic Master.wav');
		this.track8 = new Audio('songs/Heroes Never Die Master.wav');
		this.track9 = new Audio('songs/Kitchen Sink Master.wav');
		this.track10 = new Audio('songs/Blackstar.wav');
		this.track11 = new Audio('songs/Deathwissh Master.wav');
		this.track12 = new Audio('songs/Deathwish Master.wav');
		this.state = {
			activeTracks: [true, false, false, false, false, false, false, false, false, false, false, false],
			indicators: [true, false, false, false, false, false, false, false, false, false, false, false],
			playingTrack: this.track1,
			pausePlay: true
		};
	}

	componentDidMount() {
		const circleType = new CircleType(document.getElementById("circleText")).radius(55);
		var playPromise = this.track1.play();
		if (playPromise !== undefined) {
			playPromise.then(function () {
				// do nothing
			}).catch(function (error) {
				console.log(error)
			});
		}
	}

	addActiveTrack(index) {
		let activeTracks = this.state.activeTracks.map((element, ind) => {
			element = true ? ind === index : false;
			return element;
		});
		let indicators = activeTracks;
		this.setState({ activeTracks });
		this.setState({ indicators });
		this.playTrack(index);
	}

	playTrack(index) {
		this.state.playingTrack.pause();
		this.state.playingTrack.currentTime = 0
		this.setState({
			pausePlay: true
		})
		switch (index) {
			case 0:
				var playPromise = this.track1.play();
				this.setState({
					playingTrack: this.track1
				})
				break;
			case 1:
				playPromise = this.track2.play();
				this.setState({
					playingTrack: this.track2
				})
				break;
			case 2:
				playPromise = this.track3.play();
				this.setState({
					playingTrack: this.track3
				})
				break;
			case 3:
				playPromise = this.track4.play();
				this.setState({
					playingTrack: this.track4
				})
				break;
			case 4:
				playPromise = this.track5.play();
				this.setState({
					playingTrack: this.track5
				})
				break;
			case 5:
				playPromise = this.track6.play();
				this.setState({
					playingTrack: this.track6
				})
				break;
			case 6:
				playPromise = this.track7.play();
				this.setState({
					playingTrack: this.track7
				})
				break;
			case 7:
				playPromise = this.track8.play();
				this.setState({
					playingTrack: this.track8
				})
				break;
			case 8:
				playPromise = this.track9.play();
				this.setState({
					playingTrack: this.track9
				})
				break;
			case 9:
				playPromise = this.track10.play();
				this.setState({
					playingTrack: this.track10
				})
				break;
			case 10:
				playPromise = this.track11.play();
				this.setState({
					playingTrack: this.track11
				})
				break;
			case 11:
				playPromise = this.track12.play();
				this.setState({
					playingTrack: this.track12
				})
				break;
			default:
				break;
		}
		if (playPromise !== undefined) {
			playPromise.then(function () {
				// do nothing
			}).catch(function (error) {
				console.log(error)
			});
		}
	}

	pauseTrack() {
		this.setState({
			pausePlay: !this.state.pausePlay
		})
		if (this.state.pausePlay === true) {
			this.state.playingTrack.pause();
		}
		else {
			this.state.playingTrack.play();
		}
	}

	render() {
		const activeTracks = this.state.activeTracks.slice();
		return (
			<div id="page">
				<div class="circular-text">
					<div id="rotating">
						<span id="circleText">
							THE • WORLD • IS • YOURS • AND • EVERYTHING • IN • IT •
						</span>
					</div>
				</div>
				<div id="video-container">
					<ReactPlayer
						id="video-player"
						playing={this.state.pausePlay}
						url={flower}
						width='100%'
						height='100%'
						muted={true}
						loop
					/>
				</div>
				<div id="pause" onClick={() => this.pauseTrack()}>
					{this.state.pausePlay === true && <img class="img-fluid" src={pause} alt=""></img>}
					{this.state.pausePlay === false && <img class="img-fluid" src={play} alt=""></img>}
				</div>
				<div className="footer">
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
					<div id="tracklist-container">
						<div id="tracklist">
							<ul>
								<li data-id="0" className={activeTracks[0] ? "active" : "inactive"} onClick={() => this.addActiveTrack(0)}>
									{this.state.indicators[0] && <span id="current-track-smiley">⚘</span>}
									CLOSEST THING TO GOD IN THE FLESH
								</li>
								<li data-id="1" className={activeTracks[1] ? "active" : "inactive"} onClick={() => this.addActiveTrack(1)}>
									{this.state.indicators[1] && <span id="current-track-smiley">⚘</span>}
									BOMB
								</li>
								<li data-id="2" className={activeTracks[2] ? "active" : "inactive"} onClick={() => this.addActiveTrack(2)}>
									{this.state.indicators[2] && <span id="current-track-smiley">⚘</span>}
									DEAD MEN PILFER MY SILENCE (FEAT. RODNEY CHROME)
								</li>
								<li data-id="3" className={activeTracks[3] ? "active" : "inactive"} onClick={() => this.addActiveTrack(3)}>
									{this.state.indicators[3] && <span id="current-track-smiley">⚘</span>}
									KILL OR KING ME
								</li>
								<li data-id="4" className={activeTracks[4] ? "active" : "inactive"} onClick={() => this.addActiveTrack(4)}>
									{this.state.indicators[4] && <span id="current-track-smiley">⚘</span>}
									GOD SEND GOD SPEED (FEAT. ST.ARY)
								</li>
								<li data-id="5" className={activeTracks[5] ? "active" : "inactive"} onClick={() => this.addActiveTrack(5)}>
									{this.state.indicators[5] && <span id="current-track-smiley">⚘</span>}
									SHAME.
								</li>
								<li data-id="6" className={activeTracks[6] ? "active" : "inactive"} onClick={() => this.addActiveTrack(6)}>
									{this.state.indicators[6] && <span id="current-track-smiley">⚘</span>}
									NO NOT MAGIC
								</li>
								<li data-id="7" className={activeTracks[7] ? "active" : "inactive"} onClick={() => this.addActiveTrack(7)}>
									{this.state.indicators[7] && <span id="current-track-smiley">⚘</span>}
									HEROES. NEVER. DIE.
								</li>
								<li data-id="8" className={activeTracks[8] ? "active" : "inactive"} onClick={() => this.addActiveTrack(8)}>
									{this.state.indicators[8] && <span id="current-track-smiley">⚘</span>}
									THE KITCHEN SINK, PARIS TEXAS, 00110
								</li>
								<li data-id="9" className={activeTracks[9] ? "active" : "inactive"} onClick={() => this.addActiveTrack(9)}>
									{this.state.indicators[9] && <span id="current-track-smiley">⚘</span>}
									BLACKHOLE, BLACKSTAR
								</li>
								<li data-id="10" className={activeTracks[10] ? "active" : "inactive"} onClick={() => this.addActiveTrack(10)}>
									{this.state.indicators[10] && <span id="current-track-smiley">⚘</span>}
									IN BLOOM (FEAT. KELLIE RODRIGUEZ)
								</li>
								<li data-id="11" className={activeTracks[11] ? "active" : "inactive"} onClick={() => this.addActiveTrack(11)}>
									{this.state.indicators[11] && <span id="current-track-smiley">⚘</span>}
									DEATHWISH
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default LandingPage;