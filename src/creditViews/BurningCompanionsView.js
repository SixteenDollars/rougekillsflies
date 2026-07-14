import React, { Component } from 'react';
import CenteredTextView from './CenteredTextView.js';

class BurningCompanionsView extends Component {
    
    render() {
        const { text, date } = this.props;
        const creditsText = (
    <>
        <em>
        Brazilian / European phonk producers<br />
        Burial<br />
        Chynna<br />
        Deltron 3030<br />
        DMX<br />
        Lupe Fiasco<br />
        <br />
        Blade Runner 2049 (2017)<br />
        Children of Men (2006)<br />
        Ghost In The Shell (1995)<br />
        Neon Genesis Evangelion (1995 - 1996)<br />
        Portrait of a Lady on Fire (2019)<br />
        <br />
        Ekpyrosis<br />
        </em>
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

export default BurningCompanionsView;