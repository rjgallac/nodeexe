var exec = require('child_process').execFile;

var fun = function(){
//    console.log("fun() start");
   exec("nativedemo.exe --postCode=adsf", function(err, data) {  
        // console.log(err)
        console.log("HERE")
        console.log(data.toString());                       
    });  
}
fun();