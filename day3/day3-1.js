const fs = require('fs');

(async function processLineByLine() {
    try {

        var lines = fs.readFileSync('day3/input/day3-input.txt').toString().split("\r\n")

        let counts

        lines.forEach(l => {

            const bins = l.split('')

            if (!counts) {
                counts = Array(bins.length).fill().map(cell => Array(2).fill(0))
            }
            
            for (let i = 0; i < bins.length; i++) {
                if (bins[i] == '0') {
                    counts[i][0]++;
                } else {
                    counts[i][1]++;
                }

                // console.log(`bins: ${bins}`)
                // console.log(`counts ${i}: counts: ${counts[i]}`)
            }
        })

        let gamma = counts.map(c => c[0] > c[1] ? "0" : "1").join('');
        let epsilon = counts.map(c => c[0] <= c[1] ? "0" : "1").join('');

        console.log(`gamma: ${gamma} = ${parseInt(gamma, 2)}`)
        console.log(`epsilon: ${epsilon} = ${parseInt(epsilon, 2)}`)
        console.log(`power: ${parseInt(epsilon, 2) * parseInt(gamma, 2)}`)
    } catch (err) {
        console.error(err);
    }
})();