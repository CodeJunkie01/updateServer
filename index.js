
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
    fs.readFile('../prod/appConfigs.js', 'utf-8', function(err, data){
      if (err) throw err;
      const preparedProfile = ","+JSON.stringify(newProfile)+"]";
      var newValue = data.replace(/]/gim, preparedProfile);
  
      fs.writeFile('../prod/appConfigs.js', newValue, 'utf-8', function (err) {
        if (err) throw err;
        console.log("success:"+newValue);
        
      });
    }).then(()=>{
      shell.exec('./newAppReload.sh');
    });

    return res.json("success");
})