import React, { Component } from 'react'
import './Journal.css';
import 'bootstrap/dist/css/bootstrap.css';
import armymen from '../resources/images/circle.jpeg'
import { Link } from 'react-router-dom'

class Journal extends Component {
    constructor(props) {
        super(props);
        this.url = this.props.match.url
    }

    render() {
        return (
            <div id="journalPage">
                <div className="container">
                    <div className="row">
                        <div className="row">
                            <div className="col">
                                <Link to="/" style={{ textDecoration: 'none' }}>
                                    <p className="text-left" id="back-button"> back </p>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            {this.url === "/journal/1" && <p className="text-left" id="location">GARDEN PLOT 00020</p>}
                            {this.url === "/journal/2" && <p className="text-left" id="location">DOTCOM-NONSENSE.55150</p>}
                            {this.url === "/journal/3" && <p className="text-left" id="location">HOVERING CHROMATA 11111</p>}
                        </div>
                    </div>
                    <div className="rotating">
                        <div className="row">
                            <div className="col">
                                {this.url === "/journal/1" && <div id="journal-body">
                                    I'M THE LIKELY CIRCUS FOR HIGHER ZOOS<br></br>
                                THE BOTTOM WATER BEARER FOR NEW RECRUITS <br></br>
                                THE LOWS I TOOK NEVER MADE ME PROOFED <br></br>
                                FROM SOME-FLYING GLIB TOO STALE AS TRUTH  <br></br>
                                    <br></br>
                                </div>}
                            </div>
                        </div>
                    </div>
                    {this.url === "/journal/1" && <img id="army1" src={armymen} alt=""></img>}
                    {this.url === "/journal/1" && <img id="army2" src={armymen} alt=""></img>}
                    {this.url === "/journal/1" && <img id="army3" src={armymen} alt=""></img>}
                    {this.url === "/journal/1" && <img id="army4" src={armymen} alt=""></img>}
                    {this.url === "/journal/1" && <img id="army5" src={armymen} alt=""></img>}
                    {this.url === "/journal/1" && <img id="army6" src={armymen} alt=""></img>}
                    {this.url === "/journal/2" && <div id="journal-body">
                        i hate everyone and everything everybody talks way too much please shut the fuck up <br></br>
                                i'm tired of looking at your face and your stupid instagram that shit sucks and you're corny <br></br>
                                and everything you do is for attention <br></br>
                    </div>}
                    {this.url === "/journal/3" && <div id="journal-body">
                        Scared of the ten ton  balancing on  , it pays to have a gun in a , it pays to have a , something stuck behind
                        my throat  <br></br>
                    </div>}
                </div>
            </div>
        )
    }
}

export default Journal;