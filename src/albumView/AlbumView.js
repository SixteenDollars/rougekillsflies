import React, { Component } from 'react'
import './AlbumView.css';
import 'bootstrap/dist/css/bootstrap.css';
import appleblack from '../resources/images/appleblack.png'
import bcblack from '../resources/images/bcblack.png'
import spotifyblack from '../resources/images/spotifyblack.png'
import pause from '../resources/images/pause.png'
import play from '../resources/images/play.png'
import tl from '../resources/images/TL.png'
import tr from '../resources/images/TR.png'
import bl from '../resources/images/BL.png'
import br from '../resources/images/BR.png'
import flower from '../resources/videos/08-08.m4v'
import ReactPlayer from 'react-player'
import CircleType from "circletype";
import { Link } from 'react-router-dom'

class AlbumView extends Component {
	constructor(props) {
		super(props);
		this.addActiveTrack = this.addActiveTrack.bind(this);
		this.closest = new Audio('songs/closest.wav');
		this.bloom = new Audio('songs/bloom.mp3');
		this.shame = new Audio('songs/shame.mp3');
		this.godsend = new Audio('songs/godsend.mp3');
		this.magic = new Audio('songs/magic.mp3');
		this.ready = new Audio('songs/ready.mp3');
		this.tape1 = new Audio('songs/tape1.mp3');
		this.tape2 = new Audio('songs/tape2.wav');
		this.state = {
			activeTracks: [true, false, false, false, false, false, false, false],
			indicators: [true, false, false, false, false, false, false, false],
			playingTrack: this.closest,
			pausePlay: true
		};
	}

	componentDidMount() {
		const circleType = new CircleType(document.getElementById("circleText")).radius(55);
		var playPromise = this.closest.play();
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
		this.setState( {
			pausePlay: true
		})
		switch (index) {
			case 0:
				var playPromise = this.closest.play();
				this.setState ( {
					playingTrack: this.closest
				})
				break;
			case 1:
				playPromise = this.bloom.play();
				this.setState ( {
					playingTrack: this.bloom
				})
				break;
			case 2:
				playPromise = this.shame.play();
				this.setState ( {
					playingTrack: this.shame
				})
				break;
			case 3:
				playPromise = this.godsend.play();
				this.setState ( {
					playingTrack: this.godsend
				})
				break;
			case 4:
				playPromise = this.magic.play();
				this.setState ( {
					playingTrack: this.magic
				})
				break;
			case 5:
				playPromise = this.ready.play();
				this.setState ( {
					playingTrack: this.ready
				})
				break;
			case 6:
				playPromise = this.tape1.play();
				this.setState ( {
					playingTrack: this.tape1
				})
				break;
			case 7:
				playPromise = this.tape2.play();
				this.setState ( {
					playingTrack: this.tape2
				})
                break;
			case 8:
				playPromise = this.magic.play();
				this.setState ( {
					playingTrack: this.magic
				})
				break;
			case 9:
				playPromise = this.ready.play();
				this.setState ( {
					playingTrack: this.ready
				})
				break;
			case 10:
				playPromise = this.tape1.play();
				this.setState ( {
					playingTrack: this.tape1
				})
				break;
			case 11:
				playPromise = this.tape2.play();
				this.setState ( {
					playingTrack: this.tape2
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
				<div id="pictures">
					<div id="box a">
						<div id="tl" onClick={() => {this.state.playingTrack.pause()}}>
							<Link to="/home">
								{this.state.playingTrack === this.closest && <img class="img-fluid" src={tl} alt=""></img>}
								{this.state.playingTrack === this.bloom && <img class="img-fluid" src={tr} alt=""></img>}
								{this.state.playingTrack === this.godsend && <img class="img-fluid" src={bl} alt=""></img>}
								{this.state.playingTrack === this.shame && <img class="img-fluid" src={br} alt=""></img>}
								{this.state.playingTrack === this.tape1 && <img class="img-fluid" src={tl} alt=""></img>}
								{this.state.playingTrack === this.tape2 && <img class="img-fluid" src={tr} alt=""></img>}
								{this.state.playingTrack === this.ready && <img class="img-fluid" src={bl} alt=""></img>}
							</Link>
						</div>
					</div>
					<div id="box b">
						<div id="tr" onClick={() => {this.state.playingTrack.pause()}}>
							<Link to="/journal/1">
								{this.state.playingTrack === this.closest && <img class="img-fluid" src={tr} alt=""></img>}
								{this.state.playingTrack === this.bloom && <img class="img-fluid" src={bl} alt=""></img>}
								{this.state.playingTrack === this.godsend && <img class="img-fluid" src={br} alt=""></img>}
								{this.state.playingTrack === this.shame && <img class="img-fluid" src={tl} alt=""></img>}
								{this.state.playingTrack === this.tape2 && <img class="img-fluid" src={bl} alt=""></img>}
								{this.state.playingTrack === this.ready && <img class="img-fluid" src={tl} alt=""></img>}
								{this.state.playingTrack === this.magic && <img class="img-fluid" src={br} alt=""></img>}
							</Link>
						</div>
					</div>
					<div id="box c">
						<div id="bl" onClick={() => {this.state.playingTrack.pause()}}>
							<Link to="/journal/2">
								{this.state.playingTrack === this.closest && <img class="img-fluid" src={bl} alt=""></img>}
								{this.state.playingTrack === this.bloom && <img class="img-fluid" src={br} alt=""></img>}
								{this.state.playingTrack === this.godsend && <img class="img-fluid" src={tl} alt=""></img>}
								{this.state.playingTrack === this.shame && <img class="img-fluid" src={tr} alt=""></img>}
								{this.state.playingTrack === this.tape1 && <img class="img-fluid" src={br} alt=""></img>}
								{this.state.playingTrack === this.tape2 && <img class="img-fluid" src={tr} alt=""></img>}
								{this.state.playingTrack === this.magic && <img class="img-fluid" src={tl} alt=""></img>}
							</Link>
						</div>
					</div>
					<div id="box d">
						<div id="br" onClick={() => {this.state.playingTrack.pause()}}>
							<Link to="/journal/3">
								{this.state.playingTrack === this.closest && <img class="img-fluid" src={br} alt=""></img>}
								{this.state.playingTrack === this.bloom && <img class="img-fluid" src={tl} alt=""></img>}
								{this.state.playingTrack === this.godsend && <img class="img-fluid" src={tr} alt=""></img>}
								{this.state.playingTrack === this.shame && <img class="img-fluid" src={bl} alt=""></img>}
								{this.state.playingTrack === this.tape1 && <img class="img-fluid" src={bl} alt=""></img>}
								{this.state.playingTrack === this.magic && <img class="img-fluid" src={tr} alt=""></img>}
								{this.state.playingTrack === this.ready && <img class="img-fluid" src={tl} alt=""></img>}
							</Link>
						</div>
					</div>
				</div>
				<div class="circular-text">
					<div id="rotating">
						<span id="circleText">
							THIS • IS • WAR • AND • THIS • IS • WAR •
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
					<div id="logos" onClick={() => {this.state.playingTrack.pause()}}>
						<div id="appleblack">
							<Link to="/home">
								<img class="img-fluid" src={appleblack} alt=""></img>
							</Link>
						</div>
						<div id="spotifyblack">
							<Link to="/home">
								<img class="img-fluid" src={spotifyblack} alt=""></img>
							</Link>
						</div>
						<div id="bcblack">
							<Link to="/home">
								<img class="img-fluid" src={bcblack} alt=""></img>
							</Link>
						</div>
					</div>
					<div id="tracklist-container-1">
						<div id="tracklist">
							<ul>
								<li data-id="0" className={activeTracks[0] ? "active" : "inactive"} onClick={() => this.addActiveTrack(0)}>
									{this.state.indicators[0] && <span id="current-track-smiley">⚘</span>}
									01. CLOSEST THING TO GOD IN THE FLESH
								</li>
								<li data-id="1" className={activeTracks[1] ? "active" : "inactive"} onClick={() => this.addActiveTrack(1)}>
									{this.state.indicators[1] && <span id="current-track-smiley">⚘</span>}
									02. BOMB
								</li>
								<li data-id="2" className={activeTracks[2] ? "active" : "inactive"} onClick={() => this.addActiveTrack(2)}>
									{this.state.indicators[2] && <span id="current-track-smiley">⚘</span>}
									03. DEAD MEN PILFER MY SILENCE (FEAT. RODNEY CHROME)
								</li>
								<li data-id="3" className={activeTracks[3] ? "active" : "inactive"} onClick={() => this.addActiveTrack(3)}>
									{this.state.indicators[3] && <span id="current-track-smiley">⚘</span>}
									04. KILL OR KING ME
								</li>
								<li data-id="4" className={activeTracks[4] ? "active" : "inactive"} onClick={() => this.addActiveTrack(4)}>
									{this.state.indicators[4] && <span id="current-track-smiley">⚘</span>}
									05. GOD SEND, GOD SPEED (FEAT. ST.ARY)
								</li>
								<li data-id="5" className={activeTracks[5] ? "active" : "inactive"} onClick={() => this.addActiveTrack(5)}>
									{this.state.indicators[5] && <span id="current-track-smiley">⚘</span>}
									06. SHAME
								</li>
								<li data-id="6" className={activeTracks[6] ? "active" : "inactive"} onClick={() => this.addActiveTrack(6)}>
									{this.state.indicators[6] && <span id="current-track-smiley">⚘</span>}
									07. NO NOT MAGIC
								</li>
							</ul>
						</div>
					</div>
                    <div id="tracklist-container-2">
						<div id="tracklist">
							<ul>
								<li data-id="7" className={activeTracks[7] ? "active" : "inactive"} onClick={() => this.addActiveTrack(7)}>
									{this.state.indicators[7] && <span id="current-track-smiley">⚘</span>}
									08. HEROES. NEVER. DIE
								</li>
                                <li data-id="8" className={activeTracks[8] ? "active" : "inactive"} onClick={() => this.addActiveTrack(8)}>
									{this.state.indicators[8] && <span id="current-track-smiley">⚘</span>}
									09. THE KITCHEN SINK, PARIS TEXAS, 00110
								</li>
                                <li data-id="9" className={activeTracks[9] ? "active" : "inactive"} onClick={() => this.addActiveTrack(9)}>
									{this.state.indicators[9] && <span id="current-track-smiley">⚘</span>}
									10. BLACKHOLE, BLACKSTAR
								</li>
                                <li data-id="10" className={activeTracks[10] ? "active" : "inactive"} onClick={() => this.addActiveTrack(10)}>
									{this.state.indicators[10] && <span id="current-track-smiley">⚘</span>}
									11. IN BLOOM
								</li>
                                <li data-id="11" className={activeTracks[11] ? "active" : "inactive"} onClick={() => this.addActiveTrack(11)}>
									{this.state.indicators[11] && <span id="current-track-smiley">⚘</span>}
									12. DEATHWISH
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default AlbumView;