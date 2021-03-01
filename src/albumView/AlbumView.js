import React, { Component } from 'react'
import './AlbumView.css';
import ig from '../resources/images/ig.png'
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom'
import warcopy from '../resources/images/covercopy.png'
import circle from '../resources/images/circle.jpeg'
import frame from '../resources/images/TL.png'
import shoot1 from '../resources/images/shoot1.JPG'
import shoot2 from '../resources/images/shoot2.jpeg'
import ReactPlayer from 'react-player'
import spotifyblack from '../resources/images/spotifyblack.png'
import appleblack from '../resources/images/appleblack.png'
import tidalblackcircle from '../resources/images/tidalblackcircle.png'
import bcblack from '../resources/images/bcblack.png'
import mask from '../resources/images/Frame 4.png'

class AlbumView extends Component {
    render() {
        return (
            <main class="albumView">
                <nav>
                    <a href="https://rougedied.com"><h1 id="header">HOME</h1></a>
                </nav>
                <div class="album-title">
                    <h1 class="album-text">"war!" by Rouge (an album)</h1>
                </div>
                <img id="mask" class="mx-auto d-block" src={mask} alt=""></img>

                <div class="under-title">
                    <h1 class="under-text">click on your streaming service</h1>
                </div>
                <div class="row justify-content-center align-items-center">
                    <div class="col-sm-1 col-md-1 col-2">
                        <a href="https://geo.music.apple.com/us/album/_/1460176267?mt=1&app=music&at=1000lHKX">
                            <img class="img-fluid" id="applewar" src={appleblack} alt=""></img>
                        </a>
                    </div>
                    <div class="col-sm-1 col-md-1 col-2">
                        <a href="https://open.spotify.com/album/6ITBoE1l1zPCtXKOTN12IC">
                            <img class="img-fluid" id="spotifywar" src={spotifyblack} alt=""></img>
                        </a>
                    </div>
                    <div class="col-sm-1 col-md-1 col-2">
                        <a href="https://listen.tidal.com/album/107846023">
                            <div class="img-max">
                                <img class="img-fluid" id="tidalwar" src={tidalblackcircle} alt=""></img>
                            </div>
                        </a>
                    </div>
                    <div class="col-sm-1 col-md-1 col-2">
                        <a href="https://www.pandora.com/artist/various-artists/love-hart-presents-hartfm-explicit/AL2V7Pb7xcg7p74">
                            <img class="img-fluid" id="bcwar" src={bcblack} alt=""></img>
                        </a>
                    </div>
                </div>
                <div class="youtube-player">
                    <ReactPlayer
                        url="https://www.youtube.com/watch?v=UTDQnOqUe-Q"
                        controls
                    />
                </div>
                <ul class="grid">
                    <li>
                        <figure>
                            <img id="warcopy" src={warcopy} alt="WAR!"></img>
                        </figure>
                    </li>
                    <li>
                        <figure>
                            <img id="frame" src={frame} alt="Frame"></img>
                        </figure>
                    </li>
                    <li>
                        <figure>
                            <img id="shoot1" src={shoot1} alt="Shoot1"></img>
                        </figure>
                    </li>
                    <li>
                        <figure>
                            <img id="shoot2" src={shoot2} alt="Shoot2"></img>
                        </figure>
                    </li>
                    <li>
                        <figure>
                            <img id="circle" src={circle} alt="Circle"></img>
                        </figure>
                    </li>
                </ul>
                <a href="https://www.instagram.com/rougedied">
                    <img id="ig" class="mx-auto d-block" src={ig} alt=""></img>
                </a>
            </main>
        );
    }
}

export default AlbumView;