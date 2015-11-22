/*

Simple Areas

To increase our storage capacity we should start with calculating the area of the rooms we have available.

You should write a function to calculate the area of simple figures: circles, rectangles and triangles. You are given an arbitrary number of arguments which the function should use to calculate the area for the different figures.

One argument -- The diameter of a circle and you need calculate the area of the circle.
Two arguments -- The side lengths of a rectangle and you need calculate the area of the rectangle.
Three arguments -- The lengths of each side on a triangle and you need calculate the area of the triangle.
The result should be given with two digit precision like so: +-0.01

Input: One, two or three arguments as numbers.

Output: The area of the circle, the rectangle or the triangle as a number.

*/

"use strict";

function simpleAreas() {
    
    switch (arguments.length){
        case 1:
            return  Math.PI * arguments[0]/2 * arguments[0]/2;
            break;
        case 2:
            return arguments[0] * arguments[1];
            break;
        case 3:
            var s = (arguments[0] + arguments[1] + arguments[2])/2;
            return Math.sqrt(s*(s-arguments[0])*(s-arguments[1])*(s-arguments[2]))
            break;
        default:
            return 0;
    }
    
}

var assert = require('assert');

if (!global.is_checking) {
    // These "asserts" using only for self-checking and not necessary for auto-testing
    var almostEqual = function(actual, expected, significantDigits){
        significantDigits = significantDigits || 2;
        var precision =  Math.pow(0.1, significantDigits);
        return Math.abs(expected - actual) < precision;
    };

    assert(almostEqual(simpleAreas(3), 7.07), "Circle");
    assert(almostEqual(simpleAreas(2, 2), 4), "Square");
    assert(almostEqual(simpleAreas(2, 3), 6), "Rectangle");
    assert(almostEqual(simpleAreas(3, 5, 4), 6), "Triangle");
    assert(almostEqual(simpleAreas(1.5, 2.5, 2), 1.5), "Small triangle");
    console.log("All done? Earn rewards by using the 'Check' button!");
}
