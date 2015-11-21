/*
Most Numbers

To check an automated sieve for ore we use a variety of sample sets to find the smallest and the largest stones. The difference between these values is then used to decide if the sample is worth checking.

You are given an array of numbers from which you must find the difference between the maximum and minimum elements. Your function should be able to handle an undefined amount of arguments. For an empty argument list, the function should return 0.

Floating-point numbers are represented in computer hardware as base 2 (binary) fractions, since this is the case, we should check that the result is within 0.001 precision.

Input: An arbitrary number of arguments as numbers.

Output: The difference between the maximum and minimum as a number.

*/



"use strict";

function mostDifference() {
    var result = 0;
    var min = arguments[0]?arguments[0]:0;
    var max = arguments[0]?arguments[0]:0;
    
    for(i=0;i<arguments.length;i++){
        if(arguments[i]>max){
            max = arguments[i];
        }else if(arguments[i]<min){
            min = arguments[i];
        }
    }
    
    return max-min;
}

var assert = require('assert');

if (!global.is_checking) {
    // These "asserts" using only for self-checking and not necessary for auto-testing
    var almostEqual = function(actual, expected, significantDigits){
        significantDigits = significantDigits || 3;
        var precision =  Math.pow(0.1, significantDigits);
        return Math.abs(expected - actual) < precision;
    };

    assert(almostEqual(mostDifference(1, 2, 3), 2), "3-1=2");
    assert(almostEqual(mostDifference(5, 5), 0), "5-5=0");
    assert(almostEqual(mostDifference(10.2, 2.2, 0.00001, 1.1, 0.5), 10.199), "10.2-(0.00001)=10.19999");
    assert(almostEqual(mostDifference(), 0), "Empty");
    console.log("Use 'Check' to earn sweet rewards!");
}
