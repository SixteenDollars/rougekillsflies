import React, { Component } from 'react'
import './PressView.css';
import ig from '../resources/images/ig.png'
import 'bootstrap/dist/css/bootstrap.css';
import ReactPlayer from 'react-player'
import backseat from '../resources/images/backseat.png'
import flower from '../resources/images/flower.png'

class PressView extends Component {
    render() {
        return (
            <main class="flowerView">
                <nav>
                    <a href="https://rougedied.com"><h1 id="header">HOME</h1></a>
                    <a href="https://rougedied.com/war"><h1 id="header">WAR!</h1></a>
                </nav>
                <div class="picture-center">
                    <a href="https://www.backseatmafia.com/droppin-knowledge-new-york-mc-rouge-releases-his-sonically-dense-lyrically-rich-debut-war-a-review-conversation/">
                        <img id="backseat" src={backseat} alt="backseat"></img>
                    </a>
                </div>
                <div class="player-text-wrap">
                    <h1 class="player-text">backseatmafia profile (click on picture to read)</h1>
                </div>
                <img id="flower" class="mx-auto d-block" src={flower} alt=""></img>
                <a href="https://www.instagram.com/rougedied">
                    <img id="ig" class="mx-auto d-block" src={ig} alt=""></img>
                </a>
            </main>
        );
    }
}

export default PressView;