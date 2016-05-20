var repeatCallback = require(process.argv[2]);
var test = require('tape');
var n = 5;

test('reapeatCallback', function (t) {
    //var n = 5;

    t.plan(n);


    var count = 1;

    repeatCallback(n, function () {
        //t.pass('callback called');
        //t.end();


        if (count === n) {
            t.pass('end');
        }
        count++;

    });
});