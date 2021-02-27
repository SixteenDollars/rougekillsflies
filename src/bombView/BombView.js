import React, { Component } from 'react'
import './BombView.css';
import ig from '../resources/images/ig.png'
import 'bootstrap/dist/css/bootstrap.css';
import ReactPlayer from 'react-player'
import mask from '../resources/images/Frame 4.png'

class BombView extends Component {
    render() {
        return (
            <main class="bombView">
                <nav>
                    <a href="https://rougedied.com"><h1 id="header">HOME</h1></a>
                </nav>
                <div class="album-text">
                    <h1 class="bomb-title">BOMB</h1>
                </div>
                <div class="youtube-player">
                    <ReactPlayer
                        url="https://www.youtube.com/watch?v=UTDQnOqUe-Q"
                        controls
                    />
                </div>
                <img id="mask" class="mx-auto d-block" src={mask} alt=""></img>
                <a href="https://www.instagram.com/rougedied">
                    <img id="ig" class="mx-auto d-block" src={ig} alt=""></img>
                </a>
            </main>
        );
    }
}

export default BombView;