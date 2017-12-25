// const express = require('express');
// const morgan = require('morgan');
// const bodyParser = require('body-parser');
// const path = require('path');

// const app = express();
// const PORT = process.env.PORT || 8080;

// app.use(morgan);

// // parses information into a readable req.body format
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// app.use('/api', require('./api'));

// // absolute path of the directory to staticly server
// app.use(express.static(path.join(__dirname, '..', 'public')))
//   .use((req, res, next) => {
//     if (path.extname(req.path).length) {
//       const err = new Error('Not found');
//       err.status = 404;
//       next(err);
//     } else {
//       next();
//     }
//   });
// // sends index.html
// app.use('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '..', 'public/index.html'));
// });

// app.get('/ping', function (req, res, next) {
//   res.send('pong')
//     .catch(next)
//  });

// app.use((err, req, res, next) => {
//   console.error(err);
//   console.error(err.stack);
//   res.status(err.status || 500).send(err.message || 'Internal server error.');
// });

// app.listen(PORT, () => console.log(`Reading you loud and clear on ${PORT}`));

// module.exports = { app };

const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const bodyParser = require('body-parser');
const path = require('path');

app.use(express.static(path.join(__dirname, 'build')));

app.get('/ping', function (req, res) {
 res.send('pong');
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

app.listen(port, () => console.log(`Listening on port ${port}`));