const express = require('express');
const path = require('path');
const axios = require('axios');
const app = express();

app.use(express.json({ extended: false }));

// Serve the static files from the React app
//app.use(express.static(path.join(__dirname, '/dist')));
//app.use(cors());

const router = express.Router();

router.post('/add/', [], async (req, res) => {
  const data = req.body;
  
  axios.post('http://142.93.190.88/crmus/lab2/853ef35e9d750fe148fe1a9cea1e379c/amo.php', data).then(response => {
    console.log(response.statusText);
    console.log(response.data);
    res.send(response.data);
  }).catch(response => {
    console.log("Error: "+response.message);
    //res.send('POST request to the amo');
  });
});

app.use('/contact/', router);

//Handles any requests that don't match the ones above
app.use(express.static(path.join(__dirname, '/dist')));

// Handles any requests that don't match the ones above
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/dist/index.html'));
});

const port = process.env.PORT || 9091;
app.listen(port);

console.log('App is listening on port ' + port);
