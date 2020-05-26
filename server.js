const express = require('express');
const server = express();

server.get('/', (req, res) => {
  // TODO: tutaj chcemy zwrócić użytkownikowi stronę startową (ekran logowania)
  res.sendFile(`${__dirname}/public/index.html`);
});


server.listen(3000);
