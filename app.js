const express = require('express')
const app = express()
const port = 3000

const lineReader = require('line-reader');


app.get('/', (req, res) => {

    result = "asd"
    lineReader.eachLine('/day1/input/day1-input.txt', function (line) {
        result += line
        console.log(line);
    });
    

    result = "lasdlkasdasd"
    res.send(result)
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
