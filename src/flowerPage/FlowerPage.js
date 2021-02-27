import React, { Component } from 'react'
import './FlowerPage.css';
import ig from '../resources/images/ig.png'
import 'bootstrap/dist/css/bootstrap.css';
import ReactPlayer from 'react-player'
import flower from '../resources/images/flower.png'
import flowervid from '../resources/videos/08-08.m4v'

class FlowerPage extends Component {
    render() {
        return (
            <main class="flowerView">
                <nav>
                    <a href="https://rougedied.com"><h1 id="header">HOME</h1></a>
                </nav>
				<div id="video-container">
					<ReactPlayer
						playing={true}
						url={flowervid}
						muted={true}
						loop
					/>
				</div>
                <img id="flower" class="mx-auto d-block" src={flower} alt=""></img>
                <a href="https://www.instagram.com/rougedied">
                    <img id="ig" class="mx-auto d-block" src={ig} alt=""></img>
                </a>
            </main>
        );
    }
}

export default FlowerPage;