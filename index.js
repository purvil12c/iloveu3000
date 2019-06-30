#!/usr/bin/env node

const path = require('path');
const fs = require('fs');
const chalk = require('chalk');

fs.readdir(process.cwd(), function (err, files) {
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    }
    files.forEach(function (file) {
        if(file.endsWith(".js")){
            fs.appendFile(file, '\n//I Love You 3000', function (err) {
                if (err) throw err;
                console.log(chalk.white.bgRed.bold("Loved: " + file));
            });
        }
    });
});
//I Love You 3000