/*

-------------------------------------------------------------------------------

## Down To Business

Let's start with a very often-used function in Lo-Dash called filter:

    _.filter(collection, props)

filter filters collection using the condition defined by props.
collection could be anything -- an Array, JSON data or a Javascript Object.

#### Example

    var characters = [
      { 'name': 'barney', 'age': 36, 'pets': ['hoppy'] },
      { 'name': 'fred',   'age': 40, 'pets': ['baby puss', 'dino'] }
    ];
    
    _.filter(characters, { 'age': 36 });
    
    // [{ 'name': 'barney', 'age': 36, 'pets': ['hoppy'] }]

-------------------------------------------------------------------------------

## Your Mission

We have an array of Javascript Objects representing some users in the following format:

    [
        { id: 22, username: "martin", active: true},
        { id: 23, username: "max",    active: false},
        { id: 24, username: "linda",  active: false}
    ]

Please write a function that takes such a list as its first argument and give back only
the active users (active === true).

*/

// include the Lo-Dash library
var _ = require("lodash");

var worker = function(listOfObjs) {
    return _.filter(listOfObjs, { active: true });
};

// export the worker function as a nodejs module
module.exports = worker;
