const express = require('express');
const fs = require('fs');

const app = express();

app.get('/test', (req, res) => {
    res.setHeader('content-type', 'applciation/octet-stream');
    const dockerfile = fs.createReadStream('./dockerfile');
    dockerfile.pipe(res);
});

app.listen(1234)
