import React, { Component } from 'react'
import './BurningLyricsView.css';
import 'bootstrap/dist/css/bootstrap.css';

class BurningLyricsView extends Component {
    render() {
        return (
            <main class="burningLyricsView">
                <div class="row justify-content-center align-items-center">
                    <h1 id="burninglyrics-top-text">CLICK EACH SONG TITLE TO READ LYRICS</h1>
                </div>
                <div id="burninglyrics-container" class="row justify-content-center align-items-center">
                    <div>
                        <div>
                            <div id="burninglyrics-text" onClick={(e) => {
                                e.preventDefault();
                                window.location.href = 'https://rougekillsflies.com/lyrics-1';
                            }}>
                                <p id="burninglyrics-text">CONNECTION A (INTRO)</p>
                            </div>
                            <div id="burninglyrics-text" onClick={(e) => {
                                e.preventDefault();
                                window.location.href = 'https://rougekillsflies.com/lyrics-2';
                            }}>
                                <p id="burninglyrics-text">ANDROIDS DREAD THE REDS</p>
                            </div>
                            <div id="burninglyrics-text" onClick={(e) => {
                                e.preventDefault();
                                window.location.href = 'https://rougekillsflies.com/lyrics-3';
                            }}>
                                <p id="burninglyrics-text">HEAT DEATH (FEAT. MALIK ENGLISH)</p>
                            </div>
                            <div id="burninglyrics-text" onClick={(e) => {
                                e.preventDefault();
                                window.location.href = 'https://rougekillsflies.com/lyrics-4';
                            }}>
                                <p id="burninglyrics-text">718 HELL</p>
                            </div>
                            <div id="burninglyrics-text" onClick={(e) => {
                                e.preventDefault();
                                window.location.href = 'https://rougekillsflies.com/lyrics-5';
                            }}>
                                <p id="burninglyrics-text">THE FIRE TRUCKS ARE ON FIRE AND THE LIFE LINE SPOOLS LIKE HAYWIRE</p>
                            </div>
                            <div id="burninglyrics-text" onClick={(e) => {
                                e.preventDefault();
                                window.location.href = 'https://rougekillsflies.com/lyrics-6';
                            }}>
                                <p id="burninglyrics-text">STRINGER BELL THEORY / CLONE CLONE CLONE </p>
                            </div>
                            <div id="burninglyrics-text" onClick={(e) => {
                                e.preventDefault();
                                window.location.href = 'https://rougekillsflies.com/lyrics-7';
                            }}>
                                <p id="burninglyrics-text">LIMBO CONNECTION A+B (SKIT)</p>
                            </div>
                            <div id="burninglyrics-text" onClick={(e) => {
                                e.preventDefault();
                                window.location.href = 'https://rougekillsflies.com/lyrics-8';
                            }}>
                                <p id="burninglyrics-text">LIFE_IN_A_TAXI_CAB</p>
                            </div>
                            <div id="burninglyrics-text" onClick={(e) => {
                                e.preventDefault();
                                window.location.href = 'https://rougekillsflies.com/lyrics-9';
                            }}>
                                <p id="burninglyrics-text">IT’S DARK + HELL IS HOT (FEAT. DANTE GENESIS)</p>
                            </div>
                            <div id="burninglyrics-text" onClick={(e) => {
                                e.preventDefault();
                                window.location.href = 'https://rougekillsflies.com/lyrics-10';
                            }}>
                                <p id="burninglyrics-text">THE GHOSTS AIN'T REAL (FEAT. RODNEY CHROME)</p>
                            </div>
                            <div id="burninglyrics-text" onClick={(e) => {
                                e.preventDefault();
                                window.location.href = 'https://rougekillsflies.com/lyrics-11';
                            }}>
                                <p id="burninglyrics-text">LOOPS</p>
                            </div>
                            <div id="burninglyrics-text" onClick={(e) => {
                                e.preventDefault();
                                window.location.href = 'https://rougekillsflies.com/lyrics-12';
                            }}>
                                <p id="burninglyrics-text">CONNECTION B (SKIT)</p>
                            </div>
                            <div id="burninglyrics-text" onClick={(e) => {
                                e.preventDefault();
                                window.location.href = 'https://rougekillsflies.com/lyrics-13';
                            }}>
                                <p id="burninglyrics-text">DON’T TELL THE KID_S</p>
                            </div>
                            <div id="burninglyrics-text" onClick={(e) => {
                                e.preventDefault();
                                window.location.href = 'https://rougekillsflies.com/lyrics-14';
                            }}>
                                <p id="burninglyrics-text">ENOUGH</p>
                            </div>
                            <br></br>
                            <div id="burninglyrics-text" onClick={(e) => {
                                e.preventDefault();
                                window.location.href = 'https://rougekillsflies.com/lyrics-15';
                            }}>
                                <p id="burninglyrics-text">DON’T KILL MY LIGH_T (BONUS)</p>
                            </div>
                            <div id="burninglyrics-text" onClick={(e) => {
                                e.preventDefault();
                                window.location.href = 'https://rougekillsflies.com/lyrics-16';
                            }}>
                                <p id="burninglyrics-text">FOLLOW THE LIGHT, YOU'LL BE ALRIGHT (BONUS)</p>
                            </div>
                        </div>
                    </div>
                    {/*                     <p id="lyrics-text">
                        Production:<br></br>
                        Syrja (2, 4, 9, 14)<br></br>
                        Armas (3, 4, 13)<br></br>
                        Purple Denim (5, 16)<br></br>
                        Woot Noot (6, 8)<br></br>
                        Netzer0 (10)<br></br>
                        Izayah (11, 15)<br></br>
                        Aughtboyj (11)<br></br>
                        Khaji (3)<br></br>
                        Rouge Kills Flies (1, 4, 7, 12)<br></br>
                        <br></br>
                        <br></br>
                        Engineering:<br></br>
                        Daniel Neiman (Mixing) (1-8, 10-16)<br></br>
                        Adam Said (Mixing) (9)<br></br>
                        Ryan Schwabe (Mastering)<br></br>
                        <br></br>
                        <br></br>
                        Personnel:<br></br>
                        Jessica Howard (Additional Vocals) (8, 14)<br></br>
                        <br></br>
                        <br></br>
                        Executive Production:<br></br>
                        Rouge Yang, Adam Said
                    </p> */}
                </div>
            </main>
        );
    }
}

export default BurningLyricsView;