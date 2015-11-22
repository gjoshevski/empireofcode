/*
Even Last

You are given an array of integers. You should find the sum of the elements with even indexes (0th, 2nd, 4th...) then multiply this summed number and the final element of the array together. Don't forget that the first element has an index of 0.

For an empty array, the result will always be 0 (zero).

Input: An array of integers.

Output: The number as an integer.
*/

"use strict";

function evenLast(array){
    var sum = 0;
    for(i=0;i<array.length;i=i+2){
        sum+=array[i];
    }
    
    sum*=array[array.length-1]?array[array.length-1]:0;
    return sum;
}

var assert = require("assert");

if (!global.is_checking) {
    // These "asserts" using only for self-checking and not necessary for auto-testing
    assert.equal(evenLast([0, 1, 2, 3, 4, 5]), 30, "(0+2+4)*5=30");
    assert.equal(evenLast([1, 3, 5]), 30, "(1+5)*5=30");
    assert.equal(evenLast([6]), 36, "(6)*6=36");
    assert.equal(evenLast([]), 0, "An empty array = 0");
    console.log("Use 'Check' to earn sweet rewards!");
}

