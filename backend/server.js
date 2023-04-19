const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors')


const app = express();
app.use(bodyParser.json());
app.use(cors())

// Define API endpoint for 3, 5, 9, 15 sequence
app.get('/sequence/', (req, res) => {
  
  const sequence = [3, 5, 9, 15];
  for (let i = 4; i < 7 ; i++) {
    const nextTerm = sequence[i-1] + (i+1);
    sequence.push(nextTerm);
  }

  res.send(sequence);
  res.json(sequence);
  console.log(sequence)
});

// Start server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});