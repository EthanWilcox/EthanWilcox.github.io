// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: LOOPS
 */

/** 
 * Given an input Array, loop forward over the Array and print its values 
 * using console.log().
 */
function printArrayValues(array) {
  // YOUR CODE BELOW HERE //
  
  for (var i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Array, loop backwards over the Array and print its values 
 * using console.log().
 */
function printArrayValuesInReverse(array) {
  // YOUR CODE BELOW HERE //
  
  for (var i = array.length - 1; i > -1; i--) {
    console.log(array[i]);
  }
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object keys.
 */
function getObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  
  var objectKeys = [];
  for (var key in object) {
    objectKeys.push(key);
  }
  return objectKeys;
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its keys 
 * using console.log().
 */
function printObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  
  var objectKeysTwo = [];
  for (var key in object) {
    objectKeysTwo.push(key);
  }
  for (var i = 0; i < objectKeysTwo.length; i++) {
    console.log(objectKeysTwo[i]);
  }
  
  // console.log(???); //
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object's values.
 */
function getObjectValues(object) {
  // YOUR CODE BELOW HERE //
  
  var objectValues = [];
  for (var key in object) {
    objectValues.push(object[key]);
  }
  return objectValues;
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its values 
 * using console.log().
 */
function printObjectValues(object) {
  // YOUR CODE BELOW HERE //
  
  var objectValuesTwo = [];
  for (var key in object) {
    objectValuesTwo.push(object[key]);
  }
  for (var i = 0; i < objectValuesTwo.length; i++) {
    console.log(objectValuesTwo[i]);
  }
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return the length of its key/value pairs
 */
function getObjectLength(object) {
  // YOUR CODE BELOW HERE //
  
  var objectKeyLength = [];
  for (var key in object) {
    objectKeyLength.push(key);
  }
  return objectKeyLength.length
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, how might we loop over the Object IN REVERSE and 
 * print its values using console.log()?
 */
function printObjectValuesInReverse(object) {
  // YOUR CODE BELOW HERE //
  
  var objectReverseValues = [];
  for (var key in object) {
    objectReverseValues.push(object[key]);
  }
  for (var i = objectReverseValues.length - 1; i > -1; i--) {
    console.log(objectReverseValues[i]);
  }
  
  // YOUR CODE ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.printArrayValues = printArrayValues;
    module.exports.printArrayValuesInReverse = printArrayValuesInReverse;
    module.exports.printObjectValues = printObjectValues;
    module.exports.getObjectValues = getObjectValues;
    module.exports.getObjectKeys = getObjectKeys;
    module.exports.printObjectKeys = printObjectKeys;
    module.exports.getObjectLength = getObjectLength;
    module.exports.printObjectValuesInReverse = printObjectValuesInReverse;
}
