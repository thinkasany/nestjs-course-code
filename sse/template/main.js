const router = require('./router');
const express = require('express');
const logger = require('./utils/logger');
const http = require('http');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());
const PORT = 3001;

router(app);

const server = http.createServer(app);
app.set('port', PORT);
server.listen(PORT, '0.0.0.0');

server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    logger.log('warn', 'warning! listen address is in used~!');
    server.close(function () {
      process.exit();
    });
  } else {
    logger.log('error',  {
      type: 'server error',
      message: err.message,
      stack: err.stack,
    });
  }
});

server.on('listening', () => {
  const host = server.address().address;
  const port = server.address().port;
  logger.log('info', `app listening at http://${host}:${port}`);
});
