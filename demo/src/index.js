import React from 'react';
import { render } from 'react-dom';
import Typeout from '../../src';

const App = () => (
    <Typeout typewriterStrings={[
            "Fullstack Developer.", 
            "Idea Maker.", 
            "UX Architect."
        ]} config={{
            delayBetweenLetters: 100,
            delayBetweenWords: 2000,
            style: {
                color: 'red',
                fontFamily: 'Arial',
                fontSize: '3rem'
            },
            displayCaret: true,
            blinkCaret: true,
            caretType: 'underscore',
            caretStyle: {
                color: 'blue',
            }
        }} 
    />
);

render(<App />, document.getElementById("root"));