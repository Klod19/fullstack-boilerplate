/* eslint-disable no-shadow */
/* eslint-disable prefer-template */
/* eslint-disable no-useless-concat */

const express = require('express');

const app = express();

const url = 'https://sandbox-api.brewerydb.com/v2/beers/?key=1978ff415bd5416eb3a1d3b3b70f2a1c';

app.use(express.static('client'));
app.use(express.static('server'));
// app.use(express.static('client' + '/static'));
// app.use(express.static('server' + '/static'));
app.post('/api/getUsername', (req, res) => {
  fetch(url)
    .then(res => res.json())
    .then((data) => {
      res.send({ data });
    })
    .catch((err) => {
      res.redirect('/error');
      console.log(err);
    });
  // http.get(url, (res) => {
  //   console.log('Got response: ' + res);
  // }).on('error', (e) => {
  //   console.log('Got error: ' + e.message);
  // });
});

app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));
