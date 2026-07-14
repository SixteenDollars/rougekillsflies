import React, { Component } from 'react';
import CenteredTextView from './CenteredTextView.js';

class WarCompanionsView extends Component {
    
    render() {
        const { text, date } = this.props;
        const creditsText = (
    <>
        <em>
        Can<br />
        Earl Sweatshirt<br />
        Fishmans<br />
        <br />
        Fallen Angels (1995)<br />
        Stalker (1979)<br />
        <br />
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

export default WarCompanionsView;