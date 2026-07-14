import React, { Component } from 'react';
import CenteredTextView from './CenteredTextView.js';

class WarLinks extends Component {

    render() {
        const { text, date } = this.props;
        const creditsText = (
            <>
                <strong>
                    {' '}
                    <a href="https://music.apple.com/us/album/war/1853170840" target="_blank" rel="noopener noreferrer">Click here for Apple Music</a>
                </strong>
                <br />
                <br />
                <strong>
                    {' '}
                    <a href="https://open.spotify.com/album/4EB90iSgS5OIW3HhnhB6s6?si=SeggBiJ5SRS7bqVQVJkIkQ" target="_blank" rel="noopener noreferrer">Click here for Spotify</a>
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

export default WarLinks;