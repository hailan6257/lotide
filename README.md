# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @hailan6257/lotide`

**Require it:**

`const _ = require('@hailan6257/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual`: Asserting that two arrays are equal
* `assertEqual`: This function compare the two values it takes in and print out a message telling us if they match or not.
* `assertObjectsEqual`: Take in two objects and give an appropriate message to the console.
* `countLetters`: Take in a sentence (as a string) and then return a count of each of the letters in that sentence.
* `countOnly`: Take in a collection of items and return counts for a specific subset of those items. 
* `eqArrays`: Compare two arrays for a perfect match
* `eqObjects`: Take in two objects and returns true or false, based on a perfect match.
* `findKey`: This function scan the object and return the first key for which the callback returns a truthy value. If no key is found, then it should return undefined.
* `findKeyByValue`:  Search for a key on an object where its value matches a given value.
* `letterPositions`: Return all the indices (zero-based positions) in the string where each character is found.
* `map`: The map function will return a new array based on the results of the callback function.
* `head`: Retrieve the first element from a array
* `tail`: Retrieve the last element from a array
* `middle`: Take in an array and return the middle-most element(s) of the given array.
* `takeUntil`: This function will keep collecting items from a provided array until the callback provided returns a truthy value.
* `without`: Return a subset of a given array, removing unwanted elements.