//https://www.reindex.io/blog/you-might-not-need-underscore/


/*
 # Chain Mail

 Sometimes, only one utility method isn't enough or pretty. Chaining methods together lets you cut the amount of code while still letting you get your work done.

 -------------------------------------------------------------------------------

 ## Such As?

 This is where the _.chain function comes in:

 _.chain(value)

 chain lets you chain or link several Lo-Dash methods together on a collection (arrays, objects) explicitly and then finally returns the value of the whole operation.

 #### Example

 var users = [
 { 'user': 'barney',  'age': 36 },
 { 'user': 'fred',    'age': 40 },
 { 'user': 'pebbles', 'age': 1 }
 ];

 var youngest = _.chain(users)
 .sortBy('age')
 .map(function(chr) {
 return chr.user + ' is ' + chr.age;
 })
 .first()
 .value();

 // → 'pebbles is 1'

 -------------------------------------------------------------------------------

 ## Your Mission

 We have a list of words that we want to modify.

 ['Test', 'Hello', 'World', 'Node', 'JavaScript']

 We want to modify each word so that they are all appended with the word Chained, converted to uppercase, and sorted by alphabetical order. The result should look like this:

 ['HELLOCHAINED', 'JAVASCRIPTCHAINED', 'NODECHAINED', 'TESTCHAINED', 'WORLDCHAINED']

 */

// include the Lo-Dash library
var _ = require("lodash");

var worker = function(wordsArray) {
    return _.chain(wordsArray)
        .map(function(value){
            return value.toUpperCase() + 'CHAINED';
        })
        .sortBy();
};

// export the worker function as a nodejs module
module.exports = worker;
