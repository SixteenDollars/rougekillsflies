import React, { Component } from 'react'
import './AlbumView.css';
import 'bootstrap/dist/css/bootstrap.css';
import ReactPlayer from 'react-player'
import spotifyblack from '../resources/images/spotifyblack.png'
import appleblack from '../resources/images/appleblack.png'
import tidalblackcircle from '../resources/images/tidalblackcircle.png'
import yt from '../resources/images/yt.png'
import bcblack from '../resources/images/bcblack.png'
import mask from '../resources/images/Frame 4.png'
import scblack from '../resources/images/scblack.png'
import vr from '../resources/images/poly.glb'
import NailBombArt from '../resources/images/nailbombart.jpeg'
import hell718 from '../resources/images/Black.png'
import { ScrollContainer, ScrollPage, Animator, Fade, MoveIn, MoveOut, ZoomIn, Sticky, StickyIn, StickyOut, FadeOut, Move, FadeIn, batch} from 'react-scroll-motion';

const FadeUp = batch(Fade(), Move(), Sticky());

class AlbumView extends Component {
    render() {
        return (
             // V3
            <ScrollContainer>
                <main class="albumView">
                <nav>
                    <a href="https://rougekillsflies.com/press"><h1 id="header">PRESS</h1></a>
                </nav>
                <ScrollPage>
                    <Animator animation={batch(Fade())}>
                        <div class="react-player-wrapper">
                            <ReactPlayer
                                class="react-player"
                                url="https://youtu.be/w08YPOkM3ww"
                                controls
                            />
                        </div>
                        <div class="under-title">
                            <h1 class="under-text">Stream "718 Hell" (click on your service)</h1>
                        </div>
                        <div id="dsprow2" class="row justify-content-center align-items-center">
                            <div class="col-sm-1 col-md-1 col-2">
                                <a href="https://music.apple.com/us/album/718-hell/1708770531?i=1708770532">
                                    <img class="img-fluid" id="applewar" src={appleblack} alt=""></img>
                                </a>
                            </div>
                            <div class="col-sm-1 col-md-1 col-2">
                                <a href="https://open.spotify.com/track/7Lnl7bQzGorj951DhjEfOm?si=1c15c4c6ba0e4dbd">
                                    <img class="img-fluid" id="spotifywar" src={spotifyblack} alt=""></img>
                                </a>
                            </div>
{/*                             <div class="col-sm-1 col-md-1 col-2">
                                <a href="https://tidal.com/browse/track/312880213">
                                    <div class="img-max">
                                        <img class="img-fluid" id="tidalwar" src={tidalblackcircle} alt=""></img>
                                    </div>
                                </a>
                            </div> */}
                            <div class="col-sm-1 col-md-1 col-2">
                            <a href="https://rougekillsflies.bandcamp.com/track/718-hell">
                                <div class="img-max">
                                    <img class="img-fluid" id="bcwar" src={bcblack} alt=""></img>
                                </div>
                            </a>
                            </div>
                            <div class="col-sm-1 col-md-1 col-2">
                            <a href="https://music.youtube.com/watch?v=f7OaoglwD9c&si=CLHQI5lR3v6dTX7f">
                                <div class="img-max">
                                    <img class="img-fluid" id="yt" src={yt} alt=""></img>
                                </div>
                            </a>
                            </div>
                            <div class="col-sm-1 col-md-1 col-2">
                            <a href="https://on.soundcloud.com/iuoJX">
                                <div class="img-max">
                                    <img class="img-fluid" id="scwar" src={scblack} alt=""></img>
                                </div>
                            </a>
                            </div>
                        </div>
                        <div class="player-over-text-wrap">
                            <h1 class="player-over-text">scroll down for more</h1>
                        </div>
                    </Animator>
                </ScrollPage>
                </main>
                <main class="albumView">
                <ScrollPage>
                    <Animator animation={batch(Fade())}>
                        <div id="section-1">
                        <div class="album-title">
                            <h1 class="album-text">"War!"</h1>
                        </div>
                        <div class="under-title">
                            <h1 class="under-text">pinch to zoom . click titles to navigate</h1>
                        </div>
                        <div id="video-container">
                            <model-viewer 
                            id="hotspot-camera-view-demo" 
                            touch-action="none" 
                            camera-orbit="1000deg 90deg 1.5m" 
                            camera-target="-0.003m 0.0722m 0.0391m" 
                            field-of-view="45deg" 
                            min-field-of-view="25deg" 
                            max-field-of-view="45deg" 
                            interpolation-decay="200" 
                            min-camera-orbit="auto auto 5%" 
                            src={vr} 
                            alt="VR Headset" 
                            auto-rotate 
                            camera-controls 
                            ios-src={vr}>
                            <button id="view-button" 
                            onClick={(e) => {
                                e.preventDefault();
                                window.location.href='https://rougekillsflies.com/nailbomb';
                            }}
                            slot="hotspot-0" 
                            data-position="0.0000m 0.20000m -0.3500m" 
                            data-normal="-0.4421014m 0.04410423m 0.8958802m" 
                            data-orbit="3.711166deg 92.3035deg 0.04335197m" 
                            data-target="-0.1879433m 0.1157161m -0.01563221m">
                                How To Make A Nail Bomb (2023) - Single
                            </button> 
                            <button id="view-button" 
                            onClick={(e) => {
                                e.preventDefault();
                                window.location.href='https://album.link/i/1559758015';
                            }}
                            slot="hotspot-1" 
                            data-position="0.0608m 0.0566m 0.0605m" 
                            data-normal="-0.5829775m 0.2863482m -0.7603565m" 
                            data-orbit="42.72974deg 84.74043deg 0.07104211m" 
                            data-target="0.0757959m 0.04128428m 0.07109568m">
                                War! (2021) - Album
                            </button>
                            <button id="view-button" 
                            onClick={(e) => {
                                e.preventDefault();
                                window.location.href='https://youtu.be/EjLXWWdBuKU';
                            }}
                            slot="hotspot-2" 
                            data-position="-0.2500m -0.1500m -0.1398m" 
                            data-normal="-0.5829775m 0.2863482m -0.7603565m" 
                            data-orbit="-50.94862deg 84.56856deg 0.06545582m" 
                            data-target="-0.04384604m 0.07348397m -0.1213202m">
                                Closest Thing To God In The Flesh (2021) - Music Video
                            </button>  
                            </model-viewer>
                        </div>
                        <div class="player-over-text-wrap">
                            <h1 class="player-over-text">scroll down for more</h1>
                        </div>
                        </div>
                    </Animator>
                </ScrollPage>
                </main>
                <main class="albumView">
                <ScrollPage>
                    <Animator animation={batch(Fade())}>
                        <div id="section-2">
                        <div class="player-over-text-wrap">
                            <h1 class="player-over-text">"How To Make A Nail Bomb" (Single - 2023)</h1>
                        </div>
                        <img id="nailbombart" class="mx-auto d-block" src={NailBombArt} alt=""></img>
                        <div class="under-title">
                            <h1 class="under-text">click on your streaming service</h1>
                        </div>
                        <div id="dsprow" class="row justify-content-center align-items-center">
                            <div class="col-sm-1 col-md-1 col-2">
                                <a href="https://music.apple.com/us/album/how-to-make-a-nail-bomb/1704406232?i=1704406233">
                                    <img class="img-fluid" id="applewar" src={appleblack} alt=""></img>
                                </a>
                            </div>
                            <div class="col-sm-1 col-md-1 col-2">
                                <a href="https://open.spotify.com/track/2jCN2k8Dx83AeB8TEx8Xys?si=2b8c9d03f7b5439a">
                                    <img class="img-fluid" id="spotifywar" src={spotifyblack} alt=""></img>
                                </a>
                            </div>
                            <div class="col-sm-1 col-md-1 col-2">
                            <a href="https://music.youtube.com/watch?v=dSMUrW9LqvI">
                                <div class="img-max">
                                    <img class="img-fluid" id="yt" src={yt} alt=""></img>
                                </div>
                            </a>
                            </div>
                            <div class="col-sm-1 col-md-1 col-2">
                                <a href="https://tidal.com/browse/track/312880213">
                                    <div class="img-max">
                                        <img class="img-fluid" id="tidalwar" src={tidalblackcircle} alt=""></img>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div class="player-over-text-wrap">
                            <h1 class="player-over-text">scroll down for more</h1>
                        </div>
                        </div>
                    </Animator>
                </ScrollPage>
                </main>
                <main class="albumView">
                <ScrollPage id="scrollsection-3">
                    <Animator>
                        <div id="section-3">
                        <div class="player-over-text-wrap">
                            <h1 class="player-over-text">"Closest Thing to God in the Flesh" (Music Video - 2021)</h1>
                        </div>
                        <div class="react-player-wrapper">
                            <ReactPlayer
                                class="react-player"
                                url="https://youtu.be/EjLXWWdBuKU"
                                controls
                            />
                        </div>
                        <div class="under-title">
                            <h1 class="under-text">click on gas mask to listen to "War!" (Album - 2021)</h1>
                        </div>
                        <img id="mask" class="mx-auto d-block" src={mask} 
                            onClick={(e) => {
                                e.preventDefault();
                                window.location.href='https://album.link/i/1559758015';
                            }}
                            alt=""></img>
                        </div>
                    </Animator>
                </ScrollPage>
                </main>
            </ScrollContainer>
        );
    }
}

export default AlbumView;