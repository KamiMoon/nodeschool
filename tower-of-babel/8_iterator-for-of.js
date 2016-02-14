/*


In ES6 the for of way to iterate over an array has been added. Let's look at an example:

    var res = [];
    // The next line contains the for-of syntax.
    for (let element of [1, 2, 3]) {
      res.push(element * element);
    }
    console.log(res); // [1, 4, 9]

So, what is the difference to the classic for syntax? Unlike for the for of syntax is not limited to arrays. As long as something can be repeated, as long as it is Iterable, it can be used with for of.

To make something iterable you have to use Symbol.Iterator. Here is an example of how to use Symbol.Iterator:

    // calculating the fibonacci sequence to the 1000st number
    var fibonacci = {
      // Make a method that has the Symbol.iterator function.
      [Symbol.iterator]() {
        let pre = 0, cur = 1;
        // The resulting iterator object has to have a next method:
        return {
          next() {
            // The result of next has to be an object with the property `done` that states whether or not the iterator is done.
            [pre, cur] = [cur, pre + cur];
            if (pre < 1000)  return { done: false, value: pre };
            return { done: true };
          }
        }
      }
    }
    
    // The result's value property will become `n`.
    for (var n of fibonacci) {
      console.log(n);
    }
*/


const max = process.argv[2];
let FizzBuzz = {

    [Symbol.iterator]() {
        let current = 1;
        // here belongs the FizzBuzz logic
        // Hint：
        // When it's finished you have to return an object
        // with the property `done: true` but before you
        // have to set `done: false`

        //divisible by 3 -> Fizz
        //divisible by 5 -> Buzz
        //both -> FizzBuzz

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

        return {
            next() {
                if (current <= max) {
                    var next = calculate(current);
                    current++;

                    return { done: false, value: next }
                }

                return { done: true };
            }
        }

    }
}

for (var n of FizzBuzz) {
    console.log(n);
}
