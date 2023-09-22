import React, { Component } from 'react'
import './NailBombView.css';
import 'bootstrap/dist/css/bootstrap.css';
import spotifyblack from '../resources/images/spotifyblack.png'
import appleblack from '../resources/images/appleblack.png'
import tidalblackcircle from '../resources/images/tidalblackcircle.png'
import yt from '../resources/images/yt.png'
import NailBombArt from '../resources/images/nailbombart.jpeg'
import { ScrollContainer, ScrollPage } from 'react-scroll-motion';

class NailBombView extends Component {
    render() {
        return (
            // V1
            <ScrollContainer>
            <main class="albumView">
            <nav>
                <a href="https://rougekillsflies.com/press"><h1 id="header">PRESS</h1></a>
            </nav>
            </main>
            <main class="albumView">
            <ScrollPage>
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
                        </div>
                </ScrollPage>
            </main>
        </ScrollContainer>
        );
    }
}

export default NailBombView;