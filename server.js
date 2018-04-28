const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');

let clientPath = 'dist';
let cacheLength = { maxAge: 86400 * 1000 };


function startServer() {
    const port = process.env.PORT || 8080;
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));
    app.use(express.static(__dirname + '/' + clientPath, cacheLength));
    app.use(bodyParser.json());
    app.listen(port, function() {
        console.log('Listening on port ' + port);
    });
}

startServer();