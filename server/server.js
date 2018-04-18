const express = require('express');
const PORT = 5000;

const app = express();

const monsters = ['Big Foot', 'Loch Ness Monster', 'Mike', 'Sully'];

app.use(express.static('server/public'));

app.listen(PORT, () => {
  console.log(`Now running on port ${PORT}`);
});

app.get('/monsters', (req, res) => {
  res.send(monsters);
});