const express = require('express');
const fs = require('fs');

const html = fs.readFileSync('./dist/index.html', 'utf8');

const app = express();

app.use(express.static('dist'));
app.use(express.static('public'));

app.get('*', (req, res) => {
  res.send(html);
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
