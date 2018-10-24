var http = require('http');
//default is "T"
var numBalls = 5;
var bRange = 39;
var eBalls = 1;
var eBRange = 14;
//var balls = [numBalls];
var extraBalls = [eBalls];

var type = "L";
//var type = "E";
//var type = "T";


http.createServer(function(req, res) {
    res.writeHead(200, {
        'Content-Type': 'text/html'
    });
    if (type == "L") {
        numBalls = 6;
        bRange = 59;
        eBalls = 0;
        eBRange = 0;
    }
    if (type == "E") {
        numBalls = 5;
        bRange = 50;
        eBalls = 2;
        eBRange = 12;
    }
    var mynumbers = [numBalls];
    for (i = 0; i < numBalls; i++) {
        num = Math.round(Math.random() * (bRange - 1) + 1);
        mynumbers[i] = num;
        console.log(num);
        res.write(num.toString() + '<br>'); //write a response to the client
    }
    res.write('<br>') //write a response to the client
    console.log("");
    for (i = 0; i < eBalls; i++) {
        num = Math.round(Math.random() * (eBRange - 1) + 1);
        extraBalls[i] = num;
        console.log(num);
        res.write(num.toString() + '<br>'); //write a response to the client
    }
    res.write('<br>')
    console.log("");
    res.end(); //end the response
}).listen(8080);