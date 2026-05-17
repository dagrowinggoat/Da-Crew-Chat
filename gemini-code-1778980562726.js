const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Serve da frontend file
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// When a user connects
io.on('connection', (socket) => {
  console.log('A user connected to da chat');

  // Listen for a message from a user
  socket.on('chat message', (msg) => {
    // Blast it out to everybody else
    io.emit('chat message', msg);
  });

  socket.on('disconnect', () => {
    console.log('A user bounced');
  });
});

// Start da server on port 3000
server.listen(3000, () => {
  console.log('Da server is running on http://localhost:3000');
});