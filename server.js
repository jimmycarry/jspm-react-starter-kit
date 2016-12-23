// var express = require('express');
// var path = require('path');

// var router = express.Router();
// router.get('/*', function (req, res, next) {
//     if (req.url.split('/')[1] == 'api') {
//         next();
//     } else if (req.url.split('/')[1] == 'jspm_packages') {
//         res.sendFile(path.join(__dirname + req.url));
//     } else if (req.url.split('/')[1] == 'config.js') {
//         res.sendFile(path.join(__dirname + req.url));
//     } else if (req.url.split('/')[1] == 'src') {
//         res.sendFile(path.join(__dirname + req.url));
//     } else if (req.url.split('/')[1] == 'capaj') {
//         res.sendFile(path.join(__dirname + '/jspm_packages/github'+req.url));
//     } else {
//         res.sendFile(path.join(__dirname, './index.html'));
//     }

// })
// var app = new express();
// var server = require('http').createServer(app);
// var io = require('socket.io')(server);
// var PORT = 8888;
// app.use(router);
// server.listen(PORT, function (error) {
//     if (error) {
//         console.log(error);
//     } else {
//         console.log('Listening on port %s. Open up http://localhost:%s/ in your browser.', PORT, PORT);
//     }
// })

'use strict';
const jspmHmrServer = require('jspm-hmr'); 
console.log(process.env.NODE_ENV);
const options = {   open: true,port:8888 }; jspmHmrServer.start(options);