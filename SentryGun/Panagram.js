
/*
Pangram

A pangram (Greek:παν γράμμα, pan gramma, "every letter") or holoalphabetic sentence for a given alphabet is a sentence using every letter of the alphabet at least once. Perhaps you are familiar with the well known pangram "The quick brown fox jumps over the lazy dog".

But we've found one interesting usage of pangrams, we are using them to train our snipers focus.

For this mission, we will use the latin alphabet (A-Z). You are given a text with latin letters and punctuation symbols. You need to check if the sentence is a pangram or not. Case does not matter.

Input: A text as a string.

Output: Whether the sentence is a pangram or not as a boolean.

*/

"use strict";

function checkPangram(text){
    
    text = text.toLowerCase();
    
    var alphabet = 'abcdefghijklmnopqrstuvwxyz';
    
    for(i=0;i<alphabet.length;i++){
        if(text.indexOf(alphabet.charAt(i)) == -1){
            return false;
        }
    }
    
    return true;
}

var assert = require('assert');

if (!global.is_checking) {
    // These "asserts" using only for self-checking and not necessary for auto-testing
    assert.equal(checkPangram("The quick brown fox jumps over the lazy dog."), true, "brown fox");
    assert.equal(checkPangram("ABCDEF"), false, "ABC");
    assert.equal(checkPangram("Bored? Craving a pub quiz fix? Why, just come to the Royal Oak!"), true, "Bored?");
    console.log("All done? Earn rewards by using the 'Check' button!");
}
