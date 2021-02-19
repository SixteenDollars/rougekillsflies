import React, { Component } from 'react'
import './Contact.css';
import 'bootstrap/dist/css/bootstrap.css';
import appleblack from '../resources/images/appleblack.png'
import bcblack from '../resources/images/bcblack.png'
import spotifyblack from '../resources/images/spotifyblack.png'
import pause from '../resources/images/pause.png'
import play from '../resources/images/play.png'
import tl from '../resources/images/TL.png'
import tr from '../resources/images/TR.png'
import bl from '../resources/images/BL.png'
import br from '../resources/images/plant.png'
import flower from '../resources/videos/08-08.m4v'
import ReactPlayer from 'react-player'
import CircleType from "circletype";
import { Link } from 'react-router-dom'

class Contact extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {

	}

	render() {
		return (
			<div id="page">
				<div class="container">
					<div class="row">
						<div class="col">
							<p class="text-center" id="head"> HALF OF HEAVEN IS A HOME </p>
						</div>
					</div>
				</div>
				<div id="header-2">

				</div>
				<div id="grid">

				</div>
				<div id="logos">

				</div>
			</div>
		);
	}
}

export default Contact;