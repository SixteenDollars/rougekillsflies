import React, { Component } from 'react'
import './BurningCreditsView.css';
import Credits from '../resources/images/credits.png'

class BurningCreditsView extends Component {
	render() {
		return (
			<main class="burningCreditsView">
				<div id="dsprow2" class="row justify-content-center align-items-center">
					<img id="credits" class="mx-auto d-block" src={Credits} alt=""></img>
				</div>
			</main>
		);
	}
}

export default BurningCreditsView;