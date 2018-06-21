import React from 'react';

class Typeout extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            typewriterStrings: ["Fullstack Developer.", "Idea Maker.", "UX Architect."], // Array with strings to type in typewriter
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
        if (index >= this.state.typewriterStrings.length) {
            index = 0;
        }

        // Remove the old string
        this.setState({ currentString: '' });

        // start a typewriter animation for the next string in the array
        let string = this.state.typewriterStrings[index];
        this.typewriter(string, 0, index);
    }

    // types one character in the typwriter
    // keeps calling itself until the string is finished
    typewriter(string, index, wordIndex) {
        if (index >= string.length) {
            // Reset the typewriter with the next string
            setTimeout(this.loopTypewriter.bind(null, ++wordIndex), 2000);
            return;
        }

        let character = string[index];
        let displayString = this.state.currentString += character;
        this.setState({ currentString: displayString });

        // Wait a bit in between characters
        setTimeout(this.typewriter.bind(null, string, ++index, wordIndex), 100);
    }

    render() {
        return (
            <div>
                {this.state.currentString} <span className="cursor">_</span>
            </div>
        );
    }
}

export default Typeout;