
const shell = require('shelljs')
var express = require('express')
var app = express()

app.listen(3001, () => {
 console.log("Server running on port 3000");
});

app.get('/update', (req,res) => {
 shell.exec('./update.sh');
 res.json(["SUCCESS"]);
})
