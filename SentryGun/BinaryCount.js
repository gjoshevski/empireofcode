/* 
Binary Count

For the Robots the decimal format is inconvenient. If they need to count to "1", their computer brains want to count it out in binary representation of that number. You can read more about binary here.

So for now, we are using integers to inform our watchtowers about the quantity of enemies they have incoming.

You are given a positive integer as a number, and you need to convert it to the binary format then count how many units (1) there are. For example: 5 = 0b101 contains two units, so the answer is 2.

Input: A number as a positive integer.

Output: The quantity of units in binary form as an integer.

Example:

countUnits(4) == 1
countUnits(15) == 4
countUnits(1) == 1
countUnits(1022) == 9
*/

"use strict";

function countUnits(number) {

    return countZerosInString(intToBinString(number));
}

function intToBinString(intNo){
    
    var result = '';

    while(intNo>0){
        var resitude = intNo%2;
        intNo =(intNo-resitude)/ 2;
        result +=resitude;
    }
    return result;
}

function countZerosInString(str){
    var count = 0;
    for(i=0; i<str.length; i++){
        if(str.charAt(i) == 1){
            count++;
        }
    }
    return count;
}

var assert = require('assert');

if (!global.is_checking) {
    // These "asserts" using only for self-checking and not necessary for auto-testing
    assert.equal(countUnits(4), 1, "0b100");
    assert.equal(countUnits(15), 4, "0b1111");
    assert.equal(countUnits(1), 1, "0b1");
    assert.equal(countUnits(1022), 9, "0b1111111110");

    console.log("Use 'Check' to earn sweet rewards!");
}

