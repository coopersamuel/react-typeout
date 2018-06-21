import React from 'react';
import './styles.css';

class Typeout extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentString: '' // Current string being displayed
        };

        this.loopTypewriter = this.loopTypewriter.bind(this);
        this.typewriter = this.typewriter.bind(this);
    }

    componentDidMount() {
        // Once the component has mounted, start the typewriter animation
        this.loopTypewriter(0);
    }

    loopTypewriter(index) {
        // First make sure that the given index is valid
        if (index >= this.props.typewriterStrings.length) {
            index = 0;
        }

        // Remove the old string
        this.setState({ currentString: '' });

        // start a typewriter animation for the next string in the array
        let string = this.props.typewriterStrings[index];
        this.typewriter(string, 0, index);
    }

    // types one character in the typwriter
    // keeps calling itself until the string is finished
    typewriter(string, index, wordIndex) {
        const { delayBetweenLetters, delayBetweenWords } = this.props.config;

        if (index >= string.length) {
            // Reset the typewriter with the next string
            setTimeout(this.loopTypewriter.bind(null, ++wordIndex), delayBetweenWords);
            return;
        }

        let character = string[index];
        let displayString = this.state.currentString += character;
        this.setState({ currentString: displayString });

        // Wait a bit in between characters
        setTimeout(this.typewriter.bind(null, string, ++index, wordIndex), delayBetweenLetters);
    }

    render() {
        const { style, displayCaret, blinkCaret, caretType, caretStyle } = this.props.config;
        return (
            <div style={style}>
                {this.state.currentString} 
                {displayCaret &&
                    <span style={caretStyle}>
                        {caretType === 'vertical' && 
                            <span className={`vertical-caret ${blinkCaret ? 'blink' : ''}`}></span>
                        }
                        {caretType === 'underscore' &&
                            <span className={blinkCaret ? 'blink' : ''}>_</span>
                        }
                    </span>
                }
            </div>
        );
    }
}

export default Typeout;