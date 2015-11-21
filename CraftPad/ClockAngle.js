/*
Clock Angle

How do we measure an angle without a protractor? Sometime in battles things get complicated and we need to use the things around us in creative ways. To get the degrees of an angle, a simple analog clock can help us out here.

Analog clocks display time with an analog clock face, which consists of a round dial with the numbers 1 through 12, the hours in the day, around the outside. The hours are indicated with an hour hand, which makes two revolutions in a day, while the minutes are indicated by a minute hand, which makes one revolution per hour. In this mission we will use a clock without second hand. The hour hand moves smoothly and the minute hand moves step by step.

You are given a time in 24-hour format and you should calculate a lesser angle between the hour and minute hands in degrees. Don't forget that clock has numbers from 1 to 12, so 23 == 11. The time is given as a string with the follow format "HH:MM", where HH is hours and MM is minutes. Hours and minutes are given in two digits format, so "1" will be writen as "01". The result should be given in degrees with precision ±0.1.
*/

"use strict";

function clockAngle(time){
    
    var pt = time.split(':');
    var result = 0;
    
    var h = pt[0];
    var m = pt[1];
    
    var hS = (h%12 + Math.abs(1-(60-m)/60) ) *30;
    var mS = (m)*6;
    
    result = Math.abs(mS-hS);
     
    if( result > 180){
      result = 360-result; 
    }

    return Math.ceil(result * 10) / 10;
}

var assert = require('assert');

if (!global.is_checking) {
    // These "asserts" using only for self-checking and not necessary for auto-testing
    assert.equal(clockAngle("02:30"), 105, "02:30");
    assert.equal(clockAngle("13:42"), 159, "13:42");
    assert.equal(clockAngle("01:42"), 159, "01:42");
    assert.equal(clockAngle("01:43"), 153.5, "01:43");
    assert.equal(clockAngle("00:00"), 0, "Zero");
    assert.equal(clockAngle("12:01"), 5.5, "Little later");
    assert.equal(clockAngle("18:00"), 180, "Opposite");
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}

