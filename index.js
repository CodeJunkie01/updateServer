
const shell = require('shelljs')
var express = require('express')
var app = express()
var fs = require('fs')
const bodyParser = require("body-parser");
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.listen(3001, () => {
 console.log("Server running on port 3000");
});

app.get('/update', (req,res) => {
 shell.exec('./update.sh');
 res.json(["SUCCESS"]);
})

app.post('/newApp', (req,res)=> {
    
        console.log(req.body);
        const {newProfile} = req.body;
    
    fs.appendFile('../prod/appConfigs.js', newProfile, (err)=>{
      if (err) throw err;
      console.log("success:"+newProfile);
      return res.json("success");
    })
})