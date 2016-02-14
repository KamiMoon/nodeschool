/*

In the last exercise you used Iterables to generate loops. But the Iterable object did require a lot of overhead. With the new generator syntax it's possible to do the same thing with less effort.

Here is an example of the generator syntax:

    let fibonacci = function*(){
      let pre = 0, cur = 1;
      while (pre < 1000) {
        // Here we destruct the former state
        [pre, cur] = [cur, pre + cur];
        // and yield (return) each step
        yield pre;
      }
    }();
    
    for (var n of fibonacci) {
      console.log(n);
    }

    */


const max = process.argv[2];

let FizzBuzz = function*() {
    let current = 1;

    var calculate = function(current) {
        let divisibleBy3 = current % 3 === 0;
        let divisibleBy5 = current % 5 === 0;
        let both = divisibleBy3 && divisibleBy5;

        if (both) {
            return 'FizzBuzz';
        } else if (divisibleBy3) {
            return 'Fizz';
        } else if (divisibleBy5) {
            return 'Buzz';
        } else {
            return current;
        }
    }

    while (current <= max) {
        var next = calculate(current);
        current++;

        yield next;
    }
}();

for (var n of FizzBuzz) {
    console.log(n);
}
