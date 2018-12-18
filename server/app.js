// const http = require('http');

// http.createServer((request, response) => {
//     // Set CORS headers
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.setHeader('Access-Control-Request-Method', '*');
//     res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
//     res.setHeader('Access-Control-Allow-Headers', '*');

//     response.writeHead(200, {
//         Connection: 'keep-alive',
//         'Content-Type': 'text/event-stream',
//         'Cache-Control': 'no-cache'
//     });
//     let id = 1;
//     // Send event every 3 seconds or so forever...
//     setInterval(() => {
//         response.write(
//             `event: myEvent\nid: ${id}\ndata:This is event ${id}.`
//         );
//         response.write('\n\n');
//         id++;
//     }, 3000);

//     // request.on('close', () => {
//     //     response.end();
//     //     console.log('Stopped sending events.');
//     // });

// }).listen(5000);


var fs = require('fs');
var express = require('express');
var cors = require('cors');
var path = require('path');

var app = express();

app.use(cors());
app.use(express.static(path.join(__dirname, '../')));

app.get('/', function (req, res) {
    res.writeHead(200, {
        'Connection': 'keep-alive',
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Access-Control-Allow-Origin': '*'
    });

    let id = 1;
    // Send event every 3 seconds or so forever...
    setInterval(() => {
        res.write(
            `event: myEvent\nid: ${id}\ndata:This is event ${id}.`
        );
        res.write('\n\n');
        id++;
    }, 3000);

    // contents = fs.readFileSync('sliderImages.json', 'utf8');
    // res.end(contents);
});
console.log(process.env.PORT)
app.listen(process.env.PORT || 8080);