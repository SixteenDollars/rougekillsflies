import React, { Component } from 'react';
import './CenteredTextView.css';

class CenteredTextView extends Component {
    static defaultProps = {
        text: (
            <>
                This is filler text standing in for the real copy. It uses the exact same font,
                size, and weight as the <strong><em>label-credit</em></strong> text elsewhere on the site,
                just centered on the screen instead of left-aligned.
            </>
        ),
        date: '2026.1'
    };

    render() {
        const { text, date } = this.props;
        return (
            <main class="albumView centeredTextView">
                <div class="centered-text-wrap">
                    <p class="label-credit centered-credit">
                        {text}
                        {date && (
                            <>
                                <br />
                                {date}
                            </>
                        )}
                    </p>
                </div>
            </main>
        );
    }
}

export default CenteredTextView;