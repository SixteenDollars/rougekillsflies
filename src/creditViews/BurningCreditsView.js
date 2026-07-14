import React, { Component } from 'react';
import CenteredTextView from './CenteredTextView.js';

class BurningCreditsView extends Component {

    render() {
        const { text, date } = this.props;
        const creditsText = (
            <>
                <strong>Production:</strong><br />
                Syrja (2, 4, 9, 15)<br />
                Armas (3, 4, 14)<br />
                Purple Denim (5, 16)<br />
                Woot Noot (6, 8)<br />
                Netzer0 (10)<br />
                Izayah (11, 13)<br />
                Aughtboyj (11)<br />
                Rouge Kills Flies (1, 4, 7, 12)<br />
                <br />
                <strong>Engineering:</strong><br />
                Daniel Neiman (Mixing) (1-8, 10-16)<br />
                Adam Said (Mixing) (9)<br />
                Ryan Schwabe (Mastering)<br />
                <br />
                <strong>Personnel:</strong><br />
                Jessica Howard (Additional Vocals) (8, 14)<br />
                <br />
                <strong>Executive Production:</strong><br />
                Rouge Yang, Adam Said
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

export default BurningCreditsView;