import React, { Component } from 'react'
import './DogPrivateView.css';
import 'bootstrap/dist/css/bootstrap.css';
import DOG from '../resources/images/DOG.png'
import Lightspeed from '../resources/videos/Lightspeed.mp4'
import SunGoBlind from '../resources/videos/SunGoBlind.mp4'

class DogPrivateView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentIndex: 0
        };
    }

    nextItem = () => {
        this.setState(prevState => ({
            currentIndex: prevState.currentIndex === 2 ? 0 : prevState.currentIndex + 1
        }));
    }

    prevItem = () => {
        this.setState(prevState => ({
            currentIndex: prevState.currentIndex === 0 ? 2 : prevState.currentIndex - 1
        }));
    }

    render() {
        const { currentIndex } = this.state;

        return (
            <main className="dogPrivateView">
                <p>
                    <span className="dog-title">DOG:</span>
                    <span style={{ display: 'block' }}>Devoted as a halo that won't float.</span>
                    <span style={{ display: 'block', paddingLeft: '.5em' }}>.obedient as collars that don't choke</span>
                    <br></br>
                    <span style={{ fontSize: '.8em', paddingLeft: '.75em', fontWeight: 'bold' }}>production:</span>
                    <span style={{ fontSize: '0.75em' }}> yespho, badfriend, driver, izayah, reallyjustin, flousen, rouge kills flies</span>
                    <br></br>
                    <span style={{ fontSize: '0.8em', paddingLeft: '1.75em', fontWeight: 'bold' }}>mixing + mastering:</span>
                    <span style={{ fontSize: '0.75em' }}> andrew krivonos</span>
                    <br></br>
                    <span style={{ fontSize: '0.8em', paddingLeft: '2.75em', fontWeight: 'bold' }}>artwork:</span>
                    <span style={{ fontSize: '0.75em' }}> yassmin dehesh</span>
                </p>

                <img id="dog" src={DOG} alt=""></img>

                <div className="carousel-container">
                    <button className="carousel-btn left" onClick={this.prevItem}>
                        &#8249;
                    </button>

                    <div className="media-display">
                        {/* SoundCloud - always mounted */}
                        <iframe
                            className={currentIndex === 0 ? 'visible' : 'hidden'}
                            width="100%"
                            height="450"
                            allow="autoplay"
                            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/soundcloud%253Aplaylists%253A2077495404&color=%23646464&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true">
                        </iframe>
                        
                        {/* Video 1 */}
                        {currentIndex === 1 && (
                            <video
                                key="video1"
                                className="visible"
                                autoPlay
                                muted
                                loop
                                playsInline
                                controls>
                                <source src={Lightspeed} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        )}

                        {/* Video 2 */}
                        {currentIndex === 2 && (
                            <video
                                key="video2"
                                className="visible"
                                autoPlay
                                muted
                                loop
                                playsInline
                                controls>
                                <source src={SunGoBlind} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        )}
                    </div>

                    <button className="carousel-btn right" onClick={this.nextItem}>
                        &#8250;
                    </button>
                </div>
            </main>
        );
    }
}

export default DogPrivateView;