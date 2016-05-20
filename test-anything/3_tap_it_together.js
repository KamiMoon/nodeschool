var fancify = require(process.argv[2]);
var test = require('tape');

test('fancify', function (t) {
    t.equal(fancify('Wat'), '~*~Wat~*~', 'Wraps a string in ~*~');
    t.equal(fancify('Wat', true), '~*~WAT~*~', 'Optionally makes it allcaps');
    t.equal(fancify('Wat', false, '%'), '~%~Wat~%~', 'Optionally allows to set the character');
    t.end();
});
