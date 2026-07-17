import React, { Component } from 'react';
import CenteredTextView from './CenteredTextView.js';

class BurningLinks extends Component {

    render() {
        const { text, date } = this.props;
        const creditsText = (
            <>
                <strong>
                    {' '}
                    <a href="https://music.apple.com/us/artist/rouge-kills-flies/1555735365" target="_blank" rel="noopener noreferrer">Click here for Apple Music</a>
                </strong>
                <br />
                <br />
                <strong>
                    {' '}
                    <a href="https://soundcloud.com/rougekillsflies/sets/dog" target="_blank" rel="noopener noreferrer">Click here for Soundcloud</a>
                </strong>
                <br />
                <br />
                <strong>
                    {' '}
                    <a href="https://open.spotify.com/artist/6nbcBSweBGQxsgni0Xu1YC?si=cPMTt1qlQGu8qhxMD3alAA" target="_blank" rel="noopener noreferrer">Click here for Spotify</a>
                </strong>
            </>
        );

        return (
            <CenteredTextView
                text={creditsText}
                date={null}
            />
        );
    }
}

export default BurningLinks;