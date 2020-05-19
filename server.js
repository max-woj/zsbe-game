const express = require('express');
const fs = require('fs');
const server = express();

server.get('/', (req, res) => {
  // TODO: tutaj chcemy zwrócić użytkownikowi stronę startową (ekran logowania)
  fs.readFile(`${__dirname}/public/index.html`, (err, data ) => {
    res.send(data);
  })
});


server.listen(3000);
