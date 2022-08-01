import React, { Component } from 'react'
import './PressView.css';
import ig from '../resources/images/ig.png'
import 'bootstrap/dist/css/bootstrap.css';
import ReactPlayer from 'react-player'
import backseat from '../resources/images/backseat.png'
import theq from '../resources/images/theq.png'
import centralsauce from '../resources/images/centralsauce.jpg'

import flower from '../resources/images/flower.png'

class PressView extends Component {
    render() {
        return (
            <main class="albumView">
            <nav>
                <a href="https://rougekillsflies.com"><h1 id="header">HOME</h1></a>
                <a href="https://rrougekillsflies.com/press"><h1 id="header">PRESS</h1></a>
            </nav>
            <a href="https://centralsauce.com/rouge-closest-thing-to-god-in-the-flesh">
                <img id="centralsauce" class="mx-auto d-block" src={centralsauce} alt=""></img>
            </a>
            <div class="press-text-wrap">
                <h1 class="press-text">central sauce (click on picture to read)</h1>
            </div>
            <a href="https://open.spotify.com/episode/0fNk2Qg4Pich14vX8aIvpo?si=80c65ed1aab54e4f">
                <img id="theq" class="mx-auto d-block" src={theq} alt=""></img>
            </a>
            <div class="press-text-wrap">
                <h1 class="press-text">the q (click on picture to listen)</h1>
            </div>
            <a href="https://www.backseatmafia.com/droppin-knowledge-new-york-mc-rouge-releases-his-sonically-dense-lyrically-rich-debut-war-a-review-conversation/">
                <img id="backseat" class="mx-auto d-block" src={backseat} alt=""></img>
            </a>
            <div class="press-text-wrap">
                <h1 class="press-text">backseatmafia (click on picture to read)</h1>
            </div>
            <img id="flower" class="mx-auto d-block" src={flower} alt=""></img>
            <a href="https://www.instagram.com/rougekillsflies">
                <img id="ig" class="mx-auto d-block" src={ig} alt=""></img>
            </a>
        </main>
        );
    }
}

export default PressView;