var Q = require('q');

var inputJSON = process.argv[2];

//fcall to create promises directly

Q.fcall(JSON.parse, inputJSON).then(null, console.log);
