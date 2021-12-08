const fs = require('fs');


function keepPositive(lines, index) {
    
    const posIndexCount = lines.map(l => l.charAt(index)).filter(bin => bin == "1").length
    const negIndexCount = lines.map(l => l.charAt(index)).filter(bin => bin == "0").length
    // console.log(posIndexCount + "/" + negIndexCount);
    return posIndexCount > negIndexCount
}


function processLineByLine() {
    try {

        var lines = fs.readFileSync('day3/input/day3-input-small.txt').toString().split("\r\n")

        let counts

        lines.forEach(l => {

            const bins = l.split('')

            if (!counts) {
                counts = Array(bins.length).fill().map(cell => Array(2).fill(0))
            }
            
            for (let i = 0; i < bins.length; i++) {
                const bin = bins[i];
                if (bin == '0') {
                    counts[i][0]++;
                } else {
                    counts[i][1]++;
                }
            }
        })

        lines.forEach(l => {

            const bins = l.split('')

            result = []

            for (let i = 0; i < bins.length; i++) {
                const bin = bins[i];


                if (keepPositive(lines, i)) {
                    resul.
                }
                if (bin == '0') {
                    counts[i][0]++;
                } else {
                    counts[i][1]++;
                }
            }
        })


        counts.filter(c=>c[0]>c[1]).forEach(c => console.log(c))
    } catch (err) {
        console.error(err);
    }
}


processLineByLine();