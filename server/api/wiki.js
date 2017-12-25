const router = require('express').Router();

module.exports = router;

router.get('/', (req, res, next) => {
  res.send('Will go to /wikis for all wikis')
    .catch(next);
});

router.post('/', (req, res, next) => {
  res.send('Will post to /wikis to add wikis')
    .catch(next);
});

router.get('/add', (req, res, next) => {
  res.send('Will get add wiki page')
    .catch(next);
});

router.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('There was an Express error.');
});

// Page.find({}).exec(function callback (err, pages){...});
// Page.find({}).exec()
// .then(function success (page) {...})
// .catch(console.error);
