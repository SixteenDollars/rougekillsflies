import React, { Component } from 'react';
import CenteredTextView from './CenteredTextView.js';

class BurningLinks extends Component {

    render() {
        const { text, date } = this.props;
        const creditsText = (
            <>
                <strong>
                    {' '}
                    <a href="https://music.apple.com/us/album/the-burning/1822644661" target="_blank" rel="noopener noreferrer">Click here for Apple Music</a>
                </strong>
                <br />
                <br />
                <strong>
                    {' '}
                    <a href="https://open.spotify.com/album/1rudju7PcwW6g6pGdgCEli?si=93gyXg9yT3y-Qr6piYQnqg" target="_blank" rel="noopener noreferrer">Click here for Spotify</a>
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