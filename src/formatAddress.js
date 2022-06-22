var exec = require('child_process').execFile;
const path = require('path');

module.exports.format = function(address){
    const demo = path.resolve('nativedemo.exe');
    cmd = 
    exec(demo, 
        [
            `--postCode=${address.postcode}`, 
            `--postTown=${address.posttown}`
        ], 
        function(err, stdout, stderr) {  
            if (err) {
                console.error(`exec error: ${err}`);
                return;
            }
            console.log(`${stdout}`);                       
        });  
}
