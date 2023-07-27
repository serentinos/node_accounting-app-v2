'use strict';

const { createServer } = require('./src/createServer');

require('dotenv').config();

createServer()
  .listen(3000, () => {
    // eslint-disable-next-line no-console
    console.log(`Server is running on ${process.env.HOST_URL}:${3000}`);
  });
