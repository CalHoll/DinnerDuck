const Duck = require('../../models/Duck');

module.exports = (app) => {
  app.get('/api/get-ducks', (req, res, next) => {
    Duck.find()
      .exec()
      .then((ducks) => res.json(ducks))
      .catch((err) => next(err));
  });

  app.post('/api/submit-duck', function (req, res, next) {
    const duck = new Duck();

    duck.save()
      .then(() => res.json(duck))
      .catch((err) => next(err));
  });

  app.delete('/api/ducks/:id', function (req, res, next) {
    Duck.findOneAndRemove({ _id: req.params.id })
      .exec()
      .then((duck) => res.json())
      .catch((err) => next(err));
  });

};
