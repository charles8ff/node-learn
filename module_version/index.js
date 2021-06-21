'use strict';

const fs = require('fs');
const path = require('path');

let moduleVersion = function(moduleName, callback) {
    let myFile = path.join('./node_modules', moduleName, 'package.json')

    fs.readFile(myFile, 'utf8', function(err,data){
        if(err){
            callback(err);
            return;
        }

        let packageJson = {};
        try{
            packageJson = JSON.parse(data);
        } catch(e){
            callback('Error while parsing: '+ e)
            return;
        }

        if (packageJson && !packageJson.version){
            callback('Version in file not found')
            return;
        }
        //ending callback
        callback(null, packageJson.version)
    });
};

let mymodule='chance';

moduleVersion(mymodule, function(err, version){
    if (err){
        console.log("Something went downhill:", err);
        return;
    }
    console.log('This module: '+ mymodule + ' version is: '+ version );
});