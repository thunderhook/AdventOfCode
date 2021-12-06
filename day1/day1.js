const fs = require('fs');

(async function processLineByLine() {
    try {


        var lines = fs.readFileSync('day1/input/day1-input.txt').toString().split("\n");

        var increaseCount = 0
        var previous, preprevious, previousSum, sum
        var status = "N/A - no previous measurement"
        var index = 0;


        lines.forEach(line => {
            current = parseInt(line)

            if (previous && preprevious) {
                sum = current + previous + preprevious

                if (previousSum) {
                    if (sum > previousSum) {
                        status = "increased"
                        increaseCount++;
                    } else if (sum == previousSum) {
                        status = "no change"
                    } else {
                        status = "decreased"
                    }
                }
            }

            console.log(`${sum} (${status})`)
            preprevious = previous
            previous = current
            previousSum = sum

            index++
        });
        console.log(`\nincreased ${increaseCount} times`)
    } catch (err) {
        console.error(err);
    }
})();