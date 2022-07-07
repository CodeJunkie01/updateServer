
const shell = require('shelljs')
var express = require('express')
var app = express()
var fs = require('fs')

app.listen(3001, () => {
 console.log("Server running on port 3000");
});

app.get('/update', (req,res) => {
 shell.exec('./update.sh');
 res.json(["SUCCESS"]);
})

app.post('/newApp', (req,res)=> {
    
        const {newProfile} = req.body;
    
        
    
    fs.readFile('../prod/appConfigs.js', 'utf-8', function(err, data){
        if (err) throw err;
    
        var newValue = data + " " + newProfile;
    
        fs.writeFile('../prod/appConfigs.js', newValue, 'utf-8', function (err) {
          if (err) throw err;
          console.log(newValue);
          return res.json("success");
        });
      });
})