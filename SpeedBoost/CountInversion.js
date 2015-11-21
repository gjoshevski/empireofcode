/*
Count Inversion

All units should be numbered and the order is very important. But how do we deal with and measure irregularities?

In computer science and discrete mathematics, an inversion is a pair of places in a sequence where the elements in these places are out of their natural order. So, if we use ascending order for a group of numbers, then an inversion is when the order is reversed and larger numbers appear before lower number in a sequence.

Check out this example sequence: (1, 2, 5, 3, 4, 7, 6) and we can see here three inversions:

5 and 3;
5 and 4;
7 and 6.
You are given a sequence of unique numbers and you should count the number of inversions in this sequence.

Input: A sequence as an array of integers.

Output: The inversion number as an integer.
*/


"use strict";

function countInversion(sequence) {
    var steps = 0;
    
    for(i=0;i<sequence.length;i++){
        for(o=i+1;o<sequence.length;o++){
           if(sequence[i]>sequence[o]) {
                steps++;
           }
        }
    }
    
    return steps;
}

var assert = require("assert");

if (!global.is_checking) {
    // These "asserts" using only for self-checking and not necessary for auto-testing
    assert.equal(countInversion([1, 2, 5, 3, 4, 7, 6]), 3, "Example");
    assert.equal(countInversion([0, 1, 2, 3]), 0, "Sorted");
    assert.equal(countInversion([99, -99]), 1, "Two numbers");
    assert.equal(countInversion([5, 3, 2, 1, 0]), 10, "Reversed");
    console.log("All set? Click 'Check' to review your code and earn rewards!");
}
