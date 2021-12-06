const fs = require('fs');

(async function processLineByLine() {
    try {

        var x = 0, y = 0
        var lines = fs.readFileSync('day2/input/day2-input.txt').toString().split("\r\n");

        lines.forEach(l => {
            const direction = l.split(" ")[0];
            var mul = direction == "forward" || direction == "down" ? 1 : -1;
            var value = mul * parseInt(l.split(" ")[1])
            if (direction == "up" || direction == "down") {
                x += value;
            } else {
                y += value;
            }
            console.log(`${l} = ${value}`)
        })

        console.log(`x/y = ${x}/${y}, multiplied: ${x*y}`)
    } catch (err) {
        console.error(err);
    }
})();