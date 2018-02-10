var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3002;
const path = require('path');

var express = require('express');

app.use('/history', express.static(path.join(__dirname, 'history')));

var os = require("os");
var name = os.hostname();

var date = require('date-and-time');

app.get('/', function(req, res){
     res.sendFile(__dirname + '/index.html');
});


////////

var fs = require('fs');
var chatlogfn = './history/history.html';
var chatlogfnlast10 = './history/historylast10.html';

const readLastLines = require('read-last-lines');
readLastLines.read('./history/history.html', 10)
    .then((lines) => console.log(lines));


io.on('connection', function(socket){
    socket.on('chat message', function(msg){
    	now = date.format(new Date(Date.now()), 'Y/M/D HH:mm:ss');

	var payload = '[' + now + ']' + msg;
	var timestamp = '[' + now + ']';

    	io.emit('chat message', payload);

	fs.appendFileSync(chatlogfn, '<li id="history"><span style="color:green;font-size:16px; font-weight:bold">'+timestamp+'</span>'+'<span style="color:green;font-size:16px; font-weight:bold">'+msg+'</span></li>\n', 'utf8');

	readLastLines.read('./history/history.html', 15)
    	    .then((lines) => fs.writeFile(chatlogfnlast10, lines, 'ASCII', (err) => { if (err) throw err; }));
    });
});

http.listen(port, function(){
    console.log('listening on *:' + port);
});
