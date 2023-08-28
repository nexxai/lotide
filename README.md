# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install @nexxai/lotide`

**Require it:**

`const _ = require('@nexxai/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `countLetters(str)`: Count how many letters are in `str`
* `countOnly(array, object)`: Count how many items defined in `object` (using `key`:`boolean` syntax) exist in the passed in array
* `findKey(obj, callback)`: Return the first key in `object` that matches the passed in callback function
* `findKeyByValue(obj, value)`: Return the first key in `object` that has the value `value`
* `flatten(arr)`: Flatten a given deeply-nested array
* `head(arr)`: Return the first item in an array
* `letterPositions(str)`: Return an array of 0-indexed positions for each letter in `string`
* `map(arr, callback)`: Perform the provided callback function over each item in `arr`
* `middle(arr)`: Return the middle value(s) in `arr` or an empty array if there isn't at least 3 items in it
* `tail(arr)`: Take an array and remove the head (first item) from it
* `takeUntil(arr, callback)`: Create and return a new array from a given array, with items until the given callback passes a truth test
* `without(arr, items)`: Create and return a new array from a given array, removing the given items
