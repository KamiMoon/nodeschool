/*

  var prop = "foo";
    
    var obj = {};
    obj[prop] = "bar";

can now be written like this in ES6:

    var prop = "foo";
    var obj = {
      [prop]: "bar"
    };

This is called a Computed Property.

The content of [] can also be a function:

    var obj = {
      // using an inline function
      [(()=>"bar" + "baz")()]: "foo"
    };

*/

/*
var evenOrOdd = +process.argv[2];
var evenOrOddKey = evenOrOdd % 2 === 0 ? "even" : "odd";
var sum = +process.argv[3] + evenOrOdd;
*/

console.log({
    [+process.argv[2] % 2 === 0 ? "even" : "odd"]: +process.argv[2],
    [+process.argv[2] + +process.argv[3]]: +process.argv[2] + +process.argv[3],
});

console.log(obj);
