const fs = require('fs');

(async function processLineByLine() {
    try {

        var x = 0, y = 0
        var lines = fs.readFileSync('day3/input/day3-input-small.txt').toString().split("\r\n")

        lines.forEach(l => {

            const positiveCounts = [], negativeCounts = []
            const bins = l.split('')
            for (let i = 0; i < bins.length; i++) {
                if (i == "1") {
                    if (!positiveCounts[i]) {
                        positiveCounts[i] = 0;
                    }
                    positiveCounts[i]++;
                } else {
                    if (!negativeCounts[i]) {
                        negativeCounts[i] = 0;
                    }
                    negativeCounts[i]++;
                }

                console.log(`pos ${i}: ${positiveCounts}`)
                console.log(`neg ${i}: ${negativeCounts}`)
                break;

                results[i]
                if (!results[i]) {
                    results.push(i)
                }
                const bin = bins[i]
                console.log(bin)
            }
        })

        console.log(`x/y = ${x}/${y}, multiplied: ${x * y}`)
    } catch (err) {
        console.error(err);
    }
})();