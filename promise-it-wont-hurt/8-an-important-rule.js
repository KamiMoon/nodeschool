var Q = require('q');


function alwaysThrows() {
    throw new Error("OH NOES");
}

function iterate(first) {
    console.log(first);

    return first + 1;
}

//it is a best practice to attach an error handler at the bottom of the chain
//this will do 1, 2, 3, 4, 5 then travel down teh chain to the error

Q.fcall(iterate, 1)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(alwaysThrows)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(null, console.log);
