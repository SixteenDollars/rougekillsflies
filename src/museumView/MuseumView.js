import React, { Component } from 'react'
import './MuseumView.css';
import 'bootstrap/dist/css/bootstrap.css';
import ReactPlayer from 'react-player'
import vr from '../resources/images/poly.glb'
import cover_War from '../resources/images/cover_War.png'
import cover_WarAlt from '../resources/images/cover_WarAlt.jpeg'
import cover_Burning from '../resources/images/cover_Burning.jpg'
import cover_BurningDeluxe from '../resources/images/cover_BurningDeluxe.png'
import cover_Lightspeeeed from '../resources/images/cover_Lightspeeeed.jpg'
import cover_Nightmarez from '../resources/images/cover_Nightmarez.jpg'
import cover_GoodBoy from '../resources/images/cover_GoodBoy.jpg'
import cover_NowIUnderstand from '../resources/images/cover_NowIUnderstand.jpg'
import NowIUnderstandMP3 from '../resources/audio/NowIUnderstandMP3.mp3'

import { ScrollContainer, ScrollPage, Animator, FadeOut, FadeIn, batch } from 'react-scroll-motion';

const SONG_TITLE = 'Now I Understand';
  
class MuseumView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lightboxImage: null,
            lightboxAlt: '',
            carouselIndex: 0,
            isPlaying: false,
            audioCurrentTime: 0,
            audioDuration: 0
        };
        this.openLightbox = this.openLightbox.bind(this);
        this.closeLightbox = this.closeLightbox.bind(this);
        this.goToPrev = this.goToPrev.bind(this);
        this.goToNext = this.goToNext.bind(this);
        this.audioRef = React.createRef();
        this.togglePlay = this.togglePlay.bind(this);
        this.handleAudioTimeUpdate = this.handleAudioTimeUpdate.bind(this);
        this.handleAudioLoadedMetadata = this.handleAudioLoadedMetadata.bind(this);
        this.handleScrub = this.handleScrub.bind(this);
 
        this.carouselItems = [
            { url: 'https://youtu.be/LJ9Y52NF1uQ', title: 'Good Boy' },
            { url: 'https://youtu.be/DdLRa4q0OxI', title: 'Nightmarez' },
            { url: 'https://youtu.be/rtAKsQ746fU', title: 'Lightspeeeeed' },
            { url: 'https://youtu.be/k7Vy4gPTyYE', title: 'Sun Go Blind [V1]' },
        ];
 
        this.carouselRows = [];
        this.registerCarouselRow = this.registerCarouselRow.bind(this);
        this.centerCarouselRow = this.centerCarouselRow.bind(this);
        this.centerAllCarouselRows = this.centerAllCarouselRows.bind(this);
        this.handleCarouselImageLoad = this.handleCarouselImageLoad.bind(this);
    }
 
    componentDidMount() {
        window.addEventListener('resize', this.centerAllCarouselRows);
        // Give the browser a tick to lay out images before centering.
        setTimeout(this.centerAllCarouselRows, 50);
    }
 
    componentWillUnmount() {
        window.removeEventListener('resize', this.centerAllCarouselRows);
    }
 
    registerCarouselRow(el) {
        if (el && !this.carouselRows.includes(el)) {
            this.carouselRows.push(el);
        }
    }
 
    centerAllCarouselRows() {
        if (window.innerWidth > 768) return;
        this.carouselRows.forEach((row) => this.centerCarouselRow(row));
    }
 
    centerCarouselRow(row) {
        if (!row || window.innerWidth > 768) return;
        if (row.classList.contains('carousel-row-pair')) return;
        const images = Array.from(row.querySelectorAll('img.carousel-image'));
        if (!images.length) return;
        const middleIndex = Math.floor((images.length - 1) / 2);
        const target = images[middleIndex];
        if (!target) return;
        const scrollLeft = target.offsetLeft - (row.clientWidth - target.clientWidth) / 2;
        row.scrollTo({ left: Math.max(scrollLeft, 0), behavior: 'auto' });
    }
 
    handleCarouselImageLoad(e) {
        const row = e.target.closest('.carousel-row');
        this.centerCarouselRow(row);
    }
 
    togglePlay() {
        const audio = this.audioRef.current;
        if (!audio) return;
        if (this.state.isPlaying) {
            audio.pause();
            this.setState({ isPlaying: false });
        } else {
            audio.play().catch(() => {});
            this.setState({ isPlaying: true });
        }
    }
 
    handleAudioTimeUpdate(e) {
        this.setState({ audioCurrentTime: e.target.currentTime });
    }
 
    handleAudioLoadedMetadata(e) {
        this.setState({ audioDuration: e.target.duration || 0 });
    }
 
    handleScrub(e) {
        const audio = this.audioRef.current;
        const value = parseFloat(e.target.value);
        if (audio) audio.currentTime = value;
        this.setState({ audioCurrentTime: value });
    }
 
    openLightbox(src, alt) {
        this.setState({ lightboxImage: src, lightboxAlt: alt });
    }
 
    closeLightbox() {
        this.setState({ lightboxImage: null, lightboxAlt: '' });
    }
 
    goToPrev() {
        this.setState((prevState) => ({
            carouselIndex: (prevState.carouselIndex - 1 + this.carouselItems.length) % this.carouselItems.length
        }));
    }
 
    goToNext() {
        this.setState((prevState) => ({
            carouselIndex: (prevState.carouselIndex + 1) % this.carouselItems.length
        }));
    }
 
    render() {
        return (
            <>
                <ScrollContainer>
                    <main class="albumView first-section">
                        <ScrollPage>
                            <Animator animation={batch(FadeIn(0.5, 1), FadeOut(1, .25))}>
                                <div class="media-block">
                                    <div class="carousel-row" ref={this.registerCarouselRow}>
                                        <img class="carousel-image" src={cover_Lightspeeeed} alt="Lightspeeeed" onClick={() => this.openLightbox(cover_Lightspeeeed, "Lightspeeeed")} onLoad={this.handleCarouselImageLoad} />
                                        <img class="carousel-image" src={cover_Nightmarez} alt="Nightmarez" onClick={() => this.openLightbox(cover_Nightmarez, "Nightmarez")} onLoad={this.handleCarouselImageLoad} />
                                        <img class="carousel-image" src={cover_GoodBoy} alt="Good Boy" onClick={() => this.openLightbox(cover_GoodBoy, "Good Boy")} onLoad={this.handleCarouselImageLoad} />
                                        <img class="carousel-image" src={cover_NowIUnderstand} alt="Now I Understand" onClick={() => this.openLightbox(cover_NowIUnderstand, "Now I Understand")} onLoad={this.handleCarouselImageLoad} />
                                    </div>
                                    <div class="museum-label">
                                        <h3 class="label-title">
                                            <em>DOG Artworks,</em> 2025
                                        </h3>
                                        <p class="label-medium">Pen and ink, digital</p>
                                        <p class="label-credit">
                                            Cover art representing each song from the full-length album <strong><em>DOG</em></strong>.
                                            Designed and drawn by Brian Kwon.
                                            Listen to the released tracks {' '}
                                            <a href="https://0909blank.com/doglinks" target="_blank" rel="noopener noreferrer">here</a>. Click each image to enlarge.
                                            <br />
                                            2025.2 - <em>Death of dogma</em>
                                        </p>
                                    </div>
                                    <div class="scroll-down-text-wrap">
                                        <h1 class="scroll-down-text">scroll down for more</h1>
                                    </div>
                                </div>
                            </Animator>
                        </ScrollPage>
                    </main>
                    <main class="albumView video-carousel-main">
                        <ScrollPage>
                            <Animator animation={batch(FadeIn(0.5, 1), FadeOut(1, .25))}>
                                <div class="media-block">
                                    <div class="video-carousel-wrap">
                                        <div class="video-carousel-stage">
                                            {[-1, 0, 1].map((offset) => {
                                                const total = this.carouselItems.length;
                                                const index = ((this.state.carouselIndex + offset) % total + total) % total;
                                                const item = this.carouselItems[index];
                                                const isCenter = offset === 0;
                                                return (
                                                    <div
                                                        key={index}
                                                        class={isCenter ? "carousel-card carousel-card-center" : "carousel-card carousel-card-side"}
                                                        onClick={() => {
                                                            if (offset === -1) this.goToPrev();
                                                            if (offset === 1) this.goToNext();
                                                        }}
                                                    >
                                                        <div class="carousel-card-video">
                                                            <ReactPlayer
                                                                url={item.url}
                                                                width="100%"
                                                                height="100%"
                                                                controls={isCenter}
                                                                light={!isCenter}
                                                                playing={false}
                                                            />
                                                        </div>
                                                        <div class="carousel-card-info">
                                                            <p class="carousel-card-title">{item.title}</p>
                                                            <p class="carousel-card-handle">{item.handle}</p>
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                        <div class="carousel-nav">
                                            <button class="carousel-nav-button" onClick={this.goToPrev} aria-label="Previous video">&#8249;</button>
                                            <button class="carousel-nav-button" onClick={this.goToNext} aria-label="Next video">&#8250;</button>
                                        </div>
                                        <div class="museum-label">
                                            <h3 class="label-title">
                                                <em>DOG Music Videos & Visualizers,</em> 2025-2026
                                            </h3>
                                            <p class="label-medium">iPhone, DJI Osmo Action 5 Pro, Blender</p>
                                            <p class="label-credit">
                                                Visualizers and short videos representing songs from the full-length album <strong><em>DOG</em></strong>.
                                                Shot and edited by Rouge. <em>Nightmarez</em> video animated by whylobin.                                                 <br />
                                                2025.1 - <em>Death of dogma</em>
                                            </p>
                                        </div>
                                        <div class="scroll-down-text-wrap">
                                            <h1 class="scroll-down-text">scroll down for more</h1>
                                        </div>
                                    </div>
                                </div>
                            </Animator>
                        </ScrollPage>
                    </main>
                                        <main class="albumView">
                        <ScrollPage>
                            <Animator animation={batch(FadeIn(0.5, 1), FadeOut(1, .25))}>
                                <div class="media-block">
                                    <div class="carousel-row carousel-row-pair" ref={this.registerCarouselRow}>
                                        <img class="carousel-image" src={cover_Burning} alt="Burning" onClick={() => this.openLightbox(cover_Burning, "Burning")} onLoad={this.handleCarouselImageLoad} />
                                        <img class="carousel-image" src={cover_BurningDeluxe} alt="BurningDeluxe" onClick={() => this.openLightbox(cover_BurningDeluxe, "BurningDeluxe")} onLoad={this.handleCarouselImageLoad} />
                                    </div>
                                    <div class="museum-label">
                                        <h3 class="label-title">
                                            <em>THE_BURNING CD,</em> 2025
                                        </h3>
                                        <p class="label-medium">Digipak</p>
                                        <p class="label-credit">
                                            Digipak CD fold designed by Rouge in support of 
                                            the full-length album <strong><em>THE_BURNING</em></strong>. Eco-friendly print. 
                                            Listen to the album {' '}
                                            <a href="https://0909blank.com/burninglinks" target="_blank" rel="noopener noreferrer">here</a>.
                                            <br />
                                            2025.4 - <em>Reclamation in a future world</em>
                                        </p>
                                    </div>
                                    <div class="scroll-down-text-wrap">
                                        <h1 class="scroll-down-text">scroll down for more</h1>
                                    </div>
                                </div>
                            </Animator>
                        </ScrollPage>
                    </main>
                    <main class="albumView">
                        <ScrollPage>
                            <Animator animation={batch(FadeIn(0.5, 1), FadeOut(1, .25))}>
                                <div class="media-block">
                                    <div class="carousel-row carousel-row-pair" ref={this.registerCarouselRow}>
                                        <img class="carousel-image" src={cover_Burning} alt="Burning" onClick={() => this.openLightbox(cover_Burning, "Burning")} onLoad={this.handleCarouselImageLoad} />
                                        <img class="carousel-image" src={cover_BurningDeluxe} alt="BurningDeluxe" onClick={() => this.openLightbox(cover_BurningDeluxe, "BurningDeluxe")} onLoad={this.handleCarouselImageLoad} />
                                    </div>
                                    <div class="museum-label">
                                        <h3 class="label-title">
                                            <em>THE_BURNING Artworks,</em> 2024
                                        </h3>
                                        <p class="label-medium">Oil, digital</p>
                                        <p class="label-credit">
                                            Cover art for the full-length album <strong><em>THE_BURNING</em></strong>.
                                            Oil paintings drawn and digitally edited by Yassmin Dehesh.
                                            Listen to the album {' '}
                                            <a href="https://0909blank.com/burninglinks" target="_blank" rel="noopener noreferrer">here</a>.
                                            {' '}
                                            <a href="https://0909blank.com/burningcredits" target="_blank" rel="noopener noreferrer">Credits</a>.
                                            {' '}
                                            <a href="https://0909blank.com/burningcompanions" target="_blank" rel="noopener noreferrer">Companions</a>. Click each image to enlarge.
                                            <br />
                                            2024.3 - <em>Reclamation in a future world</em>
                                        </p>
                                    </div>
                                    <div class="scroll-down-text-wrap">
                                        <h1 class="scroll-down-text">scroll down for more</h1>
                                    </div>
                                </div>
                            </Animator>
                        </ScrollPage>
                    </main>
                    <main class="albumView">
                        <ScrollPage>
                            <Animator animation={batch(FadeIn(0.5, 1), FadeOut(1, .85))}>
                                <div class="media-block">
                                    <div class="react-player-wrapper">
                                        <ReactPlayer
                                            class="react-player-video"
                                            url="https://youtu.be/RstFBfAQHng"
                                            controls
                                            width="100%"
                                            height="100%"
                                        />
                                    </div>
                                    <div class="museum-label">
                                        <h3 class="label-title">
                                            <em>THE_BURNING,</em> 2024
                                        </h3>
                                        <p class="label-medium">Visual album</p>
                                        <p class="label-credit">
                                            An audiovisual experience in support of the full-length album <strong><em>THE_BURNING</em></strong>.
                                            Edited by Rouge. Also features direction from Min Soo Park (<em>718 Hell, Don’t Tell The Kids</em>), and Colin Tunney (<em>The Ghosts Ain’t Real</em>).                                             <br />
                                            2024.2 - <em>Reclamation in a future world</em>
                                        </p>
                                    </div>
                                    <div class="scroll-down-text-wrap">
                                        <h1 class="scroll-down-text">scroll down for more</h1>
                                    </div>
                                </div>
                            </Animator>
                        </ScrollPage>
                    </main>
                    <main class="albumView">
                        <ScrollPage>
                            <Animator animation={batch(FadeIn(0.5, 1), FadeOut(1, .85))}>
                                <div class="media-block">
                                    <div class="react-player-wrapper">
                                        <ReactPlayer
                                            class="react-player-video"
                                            url="https://youtu.be/Ior4HMuONVw"
                                            controls
                                            width="100%"
                                            height="100%"
                                        />
                                    </div>
                                    <div class="museum-label">
                                        <h3 class="label-title">
                                            <em>The Ghosts Ain't Real (Vee Apollo's Deconstruction),</em> 2024
                                        </h3>
                                        <p class="label-medium">Canon EOS Rebel T7</p>
                                        <p class="label-credit">
                                            Vee Apollo’s deconstruction of the track <em>The Ghosts Ain’t Real </em>
                                            from the full-length album <strong><em>THE_BURNING</em></strong>.
                                            Video shot and edited by Rouge.
                                            <br />
                                            2024.1 - <em>Reclamation in a future world</em>
                                        </p>
                                        <div class="scroll-down-text-wrap">
                                            <h1 class="scroll-down-text">scroll down for more</h1>
                                        </div>
                                    </div>
                                </div>
                            </Animator>
                        </ScrollPage>
                    </main>
                    <main class="albumView">
                        <ScrollPage>
                            <Animator animation={batch(FadeIn(0.25, 1), FadeOut(1, .70))}>
                                <div id="section-1">
                                    <div class="media-block-2">
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
                                                        window.location.href = 'https://0909blank.com/warlinks';
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
                                                        window.location.href = 'https://0909blank.com/warlinks';
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
                                                        window.location.href = 'https://youtu.be/EjLXWWdBuKU';
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
                                        <div class="museum-label">
                                            <h3 class="label-title">
                                                <em>War! AR Diorama,</em> 2023
                                            </h3>
                                            <p class="label-medium">Clay, Polycam</p>
                                            <p class="label-credit">
                                                An interactive, AR diorama of characters and settings that
                                                inspired the <strong><em>War!</em></strong> mixtape.
                                                Sculpted by Jalissa Bono. The diorama can be swiveled and
                                                zoomed in / out by scrolling and pinching.
                                                Tiles are clickable and link out to various works.                                                 <br />
                                                2023.1 - <em>A new allegiance</em>
                                            </p>
                                        </div>
                                        <div class="scroll-down-text-wrap">
                                            <h1 class="scroll-down-text">scroll down for more</h1>
                                        </div>
                                    </div>
                                </div>
                            </Animator>
                        </ScrollPage>
                    </main>
                    <main class="albumView">
                        <ScrollPage>
                            <Animator animation={batch(FadeIn(0.75, 1), FadeOut(1, .75))}>
                                <div class="media-block">
                                    <div class="carousel-row carousel-row-pair" ref={this.registerCarouselRow}>
                                        <img class="carousel-image" src={cover_War} alt="Wat" onClick={() => this.openLightbox(cover_War, "War")} onLoad={this.handleCarouselImageLoad} />
                                        <img class="carousel-image" src={cover_WarAlt} alt="WarAlt" onClick={() => this.openLightbox(cover_WarAlt, "WarAlt")} onLoad={this.handleCarouselImageLoad} />
                                    </div>
                                    <div class="museum-label">
                                        <h3 class="label-title">
                                            <em>War!,</em> 2021
                                        </h3>
                                        <p class="label-medium">Film, digital</p>
                                        <p class="label-credit">
                                            Cover art for the mixtape <strong><em>War!</em></strong>.
                                            Designed, photographed, and digitally edited by Darien Eldridge (Left).
                                            Designed and digitally edited by boy blue (Right).
                                            Listen to the album {' '}
                                            <a href="https://0909blank.com/warlinks" target="_blank" rel="noopener noreferrer">here</a>.
                                            {' '}
                                            <a href="https://0909blank.com/warcompanions" target="_blank" rel="noopener noreferrer">Companions</a>. Click each image to enlarge.
                                            <br />
                                            2021.2 - <em>A new allegiance</em>
                                        </p>
                                    </div>
                                    <div class="scroll-down-text-wrap">
                                        <h1 class="scroll-down-text">scroll down for more</h1>
                                    </div>
                                </div>
                            </Animator>
                        </ScrollPage>
                    </main>
                    <main class="albumView">
                        <ScrollPage>
                            <Animator animation={batch(FadeIn(0.5, 1), FadeOut(1, .90))}>
                                <div class="media-block">
                                    <div class="react-player-wrapper">
                                        <ReactPlayer
                                            class="react-player-video"
                                            url="https://youtu.be/EjLXWWdBuKU"
                                            controls
                                            width="100%"
                                            height="100%"
                                        />
                                    </div>
                                    <div class="museum-label">
                                        <h3 class="label-title">
                                            <em>Closest Thing to God in the Flesh,</em> 2021
                                        </h3>
                                        <p class="label-medium">Music video</p>
                                        <p class="label-credit">
                                            Music video in support of the track <em>Closest Thing to God in the Flesh</em> from the mixtape <strong><em>War!</em></strong>.
                                            Directed by John Zeng.
                                            <br />
                                            2021.1 - <em>A new allegiance</em>
                                        </p>
                                    </div>
                                </div>
                            </Animator>
                        </ScrollPage>
                    </main>
                </ScrollContainer>
                {this.state.lightboxImage && (
                    <div class="lightbox-overlay" onClick={this.closeLightbox}>
                        <span class="lightbox-close" onClick={this.closeLightbox}>&times;</span>
                        <img
                            class="lightbox-image"
                            src={this.state.lightboxImage}
                            alt={this.state.lightboxAlt}
                            onClick={(e) => e.stopPropagation()}
                        />
                    </div>
                )}
                <audio
                    ref={this.audioRef}
                    src={NowIUnderstandMP3}
                    loop
                    preload="metadata"
                    onTimeUpdate={this.handleAudioTimeUpdate}
                    onLoadedMetadata={this.handleAudioLoadedMetadata}
                />
                {!this.state.lightboxImage && (
                    <div class="site-audio-widget">
                        <button
                            class="site-audio-toggle"
                            onClick={this.togglePlay}
                            aria-label={this.state.isPlaying ? 'Pause audio' : 'Play audio'}
                            aria-pressed={this.state.isPlaying}
                        >
                            {this.state.isPlaying ? (
                                <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
                                    <rect x="5" y="4" width="5" height="16" fill="currentColor" />
                                    <rect x="14" y="4" width="5" height="16" fill="currentColor" />
                                </svg>
                            ) : (
                                <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
                                    <path d="M6 4l14 8-14 8V4z" fill="currentColor" />
                                </svg>
                            )}
                        </button>
                        <input
                            class="site-audio-scrub"
                            type="range"
                            min="0"
                            max={this.state.audioDuration || 0}
                            step="0.1"
                            value={this.state.audioCurrentTime}
                            onChange={this.handleScrub}
                            aria-label="Seek audio position"
                        />
                        <p class="site-audio-label">"{SONG_TITLE}"</p>
                    </div>
                )}
            </>
        );
    }
}
 
export default MuseumView;