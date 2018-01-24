const express = require('express');
const Busboy = require('busboy');
const fs = require('fs');

const app = express();

const log = tag => (...args) => console.log(tag, args);

app.post('/api/video', function (req, res) {
    // const busboy = new Busboy({ headers: req.headers });
    // console.log('processing form');
    // busboy.on('file', (fieldname, file) => {
    //     console.log('file stared');
    //     res.setHeader('content-type', 'application/octet-stream')
    //     const dockerfile = fs.createReadStream('./dockerfile');
    //     dockerfile.pipe(res);
    // });

    // req.pipe(busboy);

    res.setHeader('content-type', 'applciation/octet-stream');
    const dockerfile = fs.createReadStream('./dockerfile');
    dockerfile.pipe(res);
});

app.get('/api/video', (req, res) => {
    res.setHeader('content-type', 'applciation/octet-stream');
    const dockerfile = fs.createReadStream('./dockerfile');
    dockerfile.pipe(res);
})

app.listen(3000);
console.log('Listening on port 3000');
