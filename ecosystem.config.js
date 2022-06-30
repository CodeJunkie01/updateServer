module.exports = {
        apps : [{
                name   : "UpdateServer",
                script : "yarn nodemon index.js",
                watch: "true",
                restart_delay: 10000
        }],
}
