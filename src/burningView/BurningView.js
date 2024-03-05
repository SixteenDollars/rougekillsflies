import React, { Component } from 'react'
import './BurningView.css';

class BurningView extends Component {
	constructor(props) {
		super(props);
		this.addActiveTrack = this.addActiveTrack.bind(this);
		this.state = {
			activeTracks: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
			indicators: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]
		};
	}

	addActiveTrack(index) {
		let activeTracks = this.state.activeTracks.map((element, ind) => {
			element = true ? ind === index : false;
			return element;
		});
		let indicators = activeTracks;
		this.setState({ activeTracks });
		this.setState({ indicators });
	}

	render() {
		const activeTracks = this.state.activeTracks.slice();
		return (
			<main class="burningView">
				<div id="burningcredits-container" class="row justify-content-center align-items-center">
					<h1 id="burningcredits-top-text">CLICK EACH SONG TITLE TO VIEW CREDITS</h1>
				</div>
				<div id="burningcredits-container" class="row justify-content-center align-items-center">
					<div id="burningcredits-text" className={activeTracks[0] ? "active" : "inactive"} onClick={() => this.addActiveTrack(0)}>
						{this.state.indicators[0]}
						<p id="burningcredits-text">CONNECTION A (INTRO)</p>
					</div>
					<p id="burningcredits-dot"> • </p>
					<div id="burningcredits-text" className={activeTracks[1] ? "active" : "inactive"} onClick={() => this.addActiveTrack(1)}>
						{this.state.indicators[1]}
						<p id="burningcredits-text">ANDROIDS DREAD THE REDS</p>
					</div>
					<p id="burningcredits-dot"> • </p>
					<div id="burningcredits-text" className={activeTracks[2] ? "active" : "inactive"} onClick={() => this.addActiveTrack(2)}>
						{this.state.indicators[2] }
						<p id="burningcredits-text">HEAT DEATH (FEAT. MALIK ENGLISH)</p>
					</div>
					<p id="burningcredits-dot"> • </p>
					<div id="burningcredits-text" className={activeTracks[4] ? "active" : "inactive"} onClick={() => this.addActiveTrack(4)} onclick="videoToggle()">
						{this.state.indicators[4] }
						<p id="burningcredits-text">718 HELL</p>
					</div>
					<p id="burningcredits-dot"> • </p>
					<div id="burningcredits-text" className={activeTracks[5] ? "active" : "inactive"} onClick={() => this.addActiveTrack(5)}>
						{this.state.indicators[5] }
						<p id="burningcredits-text">THE FIRE TRUCKS ARE ON FIRE AND THE LIFELINE SPOOLS LIKE HAYWIRE</p>
					</div>
					<p id="burningcredits-dot"> • </p>
					<div id="burningcredits-text" className={activeTracks[6] ? "active" : "inactive"} onClick={() => this.addActiveTrack(6)}>
						{this.state.indicators[6] }
						<p id="burningcredits-text">STRINGER BELL THEORY / CLONE CLONE CLONE</p>
					</div>
					<p id="burningcredits-dot"> • </p>
					<div id="burningcredits-text" className={activeTracks[7] ? "active" : "inactive"} onClick={() => this.addActiveTrack(7)}>
						{this.state.indicators[7] }
						<p id="burningcredits-text">LIMBO CONNECTION A + B (SKIT)</p>
					</div>
					<p id="burningcredits-dot"> • </p>
					<div id="burningcredits-text" className={activeTracks[8] ? "active" : "inactive"} onClick={() => this.addActiveTrack(8)}>
						{this.state.indicators[8] }
						<p id="burningcredits-text">LIFE_IN_A_TAXI_CAB</p>
					</div>
					<p id="burningcredits-dot"> • </p>
					<div id="burningcredits-text" className={activeTracks[9] ? "active" : "inactive"} onClick={() => this.addActiveTrack(9)}>
						{this.state.indicators[9] }
						<p id="burningcredits-text">IT'S DARK + HELL IS HOT (FEAT. DANTE GENESIS)</p>
					</div>
					<p id="burningcredits-dot"> • </p>
					<div id="burningcredits-text" className={activeTracks[10] ? "active" : "inactive"} onClick={() => this.addActiveTrack(10)}>
						{this.state.indicators[10] }
						<p id="burningcredits-text">THE GHOSTS AIN'T REAL (FEAT. RODNEY CHROME)</p>
					</div>
					<p id="burningcredits-dot"> • </p>
					<div id="burningcredits-text" className={activeTracks[11] ? "active" : "inactive"} onClick={() => this.addActiveTrack(11)}>
						{this.state.indicators[11] }
						<p id="burningcredits-text">LOOPS</p>
					</div>
					<p id="burningcredits-dot"> • </p>
					<div id="burningcredits-text" className={activeTracks[12] ? "active" : "inactive"} onClick={() => this.addActiveTrack(12)}>
						{this.state.indicators[12] }
						<p id="burningcredits-text">CONNECTION B (SKIT)</p>
					</div>
					<p id="burningcredits-dot"> • </p>
					<div id="burningcredits-text" className={activeTracks[13] ? "active" : "inactive"} onClick={() => this.addActiveTrack(13)}>
						{this.state.indicators[13] }
						<p id="burningcredits-text">DON'T KILL MY LIGH_T</p>
					</div>
					<p id="burningcredits-dot"> • </p>
					<div id="burningcredits-text" className={activeTracks[14] ? "active" : "inactive"} onClick={() => this.addActiveTrack(14)}>
						{this.state.indicators[14] }
						<p id="burningcredits-text">DON'T TELL THE KID_S</p>
					</div>
					<p id="burningcredits-dot"> • </p>
					<div id="burningcredits-text" className={activeTracks[15] ? "active" : "inactive"} onClick={() => this.addActiveTrack(15)}>
						{this.state.indicators[15] }
						<p id="burningcredits-text">ENOUGH</p>
					</div>
					<p id="burningcredits-dot"> • </p>
					<div id="burningcredits-text" className={activeTracks[16] ? "active" : "inactive"} onClick={() => this.addActiveTrack(16)}>
						{this.state.indicators[16] }
						<p id="burningcredits-text">[BONUS TRACK] FOLLOW THE LIGHT, YOU'LL BE ALRIGHT</p>
					</div>
				</div>
				{/*                     <div id="burning-container" class="row justify-content-center align-items-center">
                        <h1 id="burning-text">MIXED BY DANIEL NEIMAN (1-8, 10-16), ADAM SAID (9)</h1>
                    </div>
                    <div id="burning-container" class="row justify-content-center align-items-center">
                        <h1 id="burning-text">MASTERED BY RYAN SCHWABE</h1>
                    </div> */}
			</main>
		);
	}
}

export default BurningView;