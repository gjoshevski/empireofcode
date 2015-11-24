/*
Transpose Matrix

Sometimes it's useful to look at world from another perspective.

In linear algebra, the transpose of a matrix A is another matrix AT (also written A′, Atr,tA or At) created by any one of the following equivalent actions:

reflect A over its main diagonal (which runs from top-left to bottom-right) to obtain AT
write the rows of A as the columns of AT
write the columns of A as the rows of AT
Formally, the i row, j column element of AT is the j row, i column element of A:

[AT]i j = [A]j i

If A is an m × n matrix then AT is an n × m matrix.

You have been given a matrix as a 2D list with integers. Your task is to return a transposed matrix based on input.

|1 2 3|   |1 4 7|
|4 5 6| T |2 5 8|
|7 8 9|   |3 6 9|

|1 4 3|
|8 2 6|   |1 8 7 4 7|
|7 8 3| T |4 2 8 9 8|
|4 6 9|   |3 6 3 6 1|
|7 8 1|
Input: A matrix as an array of arrays with integers.

Output: The transposed matrix as an array of arrays with integers.

*/



"use strict";

function transpose(matrix) {
    
  var w = matrix.length ? matrix.length : 0,
  h = matrix[0] instanceof Array ? matrix[0].length : 0;

  if(h === 0 || w === 0) { return []; }

  var i, j, t = [];
  
  for(i=0; i<h; i++) {
    t[i] = [];
    for(j=0; j<w; j++) {
      t[i][j] = matrix[j][i];
    }
  }

  return t;
}

var assert = require('assert');

if (!global.is_checking) {
    // These "asserts" using only for self-checking and not necessary for auto-testing
    assert.deepEqual(transpose([[1, 2, 3], [4, 5, 6], [7, 8, 9]]),
        [[1, 4, 7], [2, 5, 8], [3, 6, 9]], "Square matrix");
    assert.deepEqual(transpose([[1, 4, 3], [8, 2, 6], [7, 8, 3], [4, 9, 6], [7, 8, 1]]),
        [[1, 8, 7, 4, 7], [4, 2, 8, 9, 8], [3, 6, 3, 6, 1]], "Rectangle matrix");
    console.log("All set? Click 'Check' to review your code and earn rewards!");
}
