const fs = require('fs');

(async function processLineByLine() {
    try {

        var x = 0, y = 0, aim = 0
        var lines = fs.readFileSync('day2/input/day2-input.txt').toString().split("\r\n");

        lines.forEach(l => {
            const direction = l.split(" ")[0];
            const numericValue = parseInt(l.split(" ")[1]);
            
            if (direction == "up") {
                aim -= numericValue
            } else if (direction == "down") {
                aim += numericValue
            } else {
                x += numericValue
                y += numericValue * aim
            }
        })

        console.log(`x/y = ${x}/${y}, multiplied: ${x*y}`)
    } catch (err) {
        console.error(err);
    }
})();