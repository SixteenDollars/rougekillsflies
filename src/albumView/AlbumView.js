import React, { Component } from 'react'
import './AlbumView.css';
import ig from '../resources/images/ig.png'
import 'bootstrap/dist/css/bootstrap.css';
import warcopy from '../resources/images/covercopy.png'
import circle from '../resources/images/shot.JPG'
import frame from '../resources/images/TL.png'
import shoot1 from '../resources/images/shoot1.JPG'
import shoot2 from '../resources/images/shoot2.jpeg'
import ReactPlayer from 'react-player'
import spotifyblack from '../resources/images/spotifyblack.png'
import appleblack from '../resources/images/appleblack.png'
import tidalblackcircle from '../resources/images/tidalblackcircle.png'
import bcblack from '../resources/images/bcblack.png'
import mask from '../resources/images/Frame 4.png'
import linktree from '../resources/images/OTHER.png'

class AlbumView extends Component {
    render() {
        const loveharturi = "spotify:album:6ITBoE1l1zPCtXKOTN12IC";
		const size = {
			width: '50%',
			height: 350
		};
        const view = 'list'; // or 'coverart'
		const theme = 'black'; // or 'white'
        return (
            <main class="albumView">
                <nav>
                    <a href="https://rougekillsflies.com"><h1 id="header">HOME</h1></a>
                    <a href="https://rougekillsflies.com/press"><h1 id="header">PRESS</h1></a>
                </nav>
                <div class="album-title">
                    <h1 class="album-text">"War!" by Rouge (an album)</h1>
                </div>
                <img id="mask" class="mx-auto d-block" src={mask} alt=""></img>

                <div class="under-title">
                    <h1 class="under-text">click on your streaming service</h1>
                </div>
                <div class="row justify-content-center align-items-center">
                    <div class="col-sm-1 col-md-1 col-2">
                        <a href="https://music.apple.com/us/album/war/1658193494">
                            <img class="img-fluid" id="applewar" src={appleblack} alt=""></img>
                        </a>
                    </div>
                    <div class="col-sm-1 col-md-1 col-2">
                        <a href="https://open.spotify.com/album/2IzE8WAuhm5AAj2xk4jKLe?si=CvlCDxjJRJOlxpoRCFX2OA">
                            <img class="img-fluid" id="spotifywar" src={spotifyblack} alt=""></img>
                        </a>
                    </div>
                    <div class="col-sm-1 col-md-1 col-2">
                        <a href="https://listen.tidal.com/album/264649475">
                            <div class="img-max">
                                <img class="img-fluid" id="tidalwar" src={tidalblackcircle} alt=""></img>
                            </div>
                        </a>
                    </div>
                    <div class="col-sm-1 col-md-1 col-2">
                        <a href="https://rougedied.bandcamp.com/album/war">
                            <img class="img-fluid" id="bcwar" src={bcblack} alt=""></img>
                        </a>
                    </div>
                    <div class="col-sm-1 col-md-1 col-2">
                        <a href="https://album.link/i/1559758015">
                            <img class="img-fluid" id="otherwar" src={linktree} alt=""></img>
                        </a>
                    </div>
                </div>
                <div class="youtube-player-1">
                    <ReactPlayer
                        url="https://youtu.be/olc8AvftI-4"
                        controls
                    />
                </div>
                <div class="player-text-wrap">
                    <h1 class="player-text">Bomb</h1>
                </div>
{/*                 <div class="youtube-player-2">
                    <ReactPlayer
                        url="https://youtu.be/3NngaAAtcoY"
                        controls
                    />
                </div>
                <div class="player-text-wrap">
                    <h1 class="player-text-1">rouge + st.ary talk about stuff</h1>
                </div>
                <div class="youtube-player-2">
                    <ReactPlayer
                        url="https://youtu.be/zFIpo35BOS0"
                        controls
                    />
                </div>
                <div class="player-text-wrap">
                    <h1 class="player-text-1">rouge + rodney chrome talk about stuff</h1>
                </div> */}
                
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
                <a href="https://www.instagram.com/rougekillsflies">
                    <img id="ig" class="mx-auto d-block" src={ig} alt=""></img>
                </a>
            </main>
        );
    }
}

export default AlbumView;