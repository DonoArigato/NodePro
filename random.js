"use strict";




function displayRandom() {
    let randomQuotes = ["If it bleeds we can kill it",
    "Embrace the suck","Just do it",
    "What I do is not up to you",
    "Doubt kills more dreams than failure ever will.",
    "Truth is on the side of the oppressed"]
    let quote = randomQuotes[Math.floor(Math.random() * randomQuotes.length)];
    return quote;

    
    }

    module.exports = displayRandom;


