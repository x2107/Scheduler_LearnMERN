const router = require('express').Router();
let Place = require('../models/place.model');

router.route('/').get((req, res) => {
    Place.find()
    .then(places => res.json(places))
    .catch(err => res.status(400).json('Error: ' +err));
});

router.route('/add').post((req, res) => {
    const username = req.body.username;
    const description = req.body.description;
    const duration = Number(req.body.duration);
    const date = Date.parse(req.body.date);

    const newPlace = new Place({
        username,
        description,
        duration,
        date,
    });

    newPlace.save()
        .then(() => res.json('Place added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Place.findById(req.params.id)
      .then(place => res.json(place))
      .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    Place.findByIdAndDelete(req.params.id)
      .then(() => res.json('Place deleted.'))
      .catch(err => res.status(400).json('Error: ' + err));
});
  
router.route('/update/:id').post((req, res) => {
    Place.findById(req.params.id)
      .then(place => {
        place.username = req.body.username;
        place.description = req.body.description;
        place.duration = Number(req.body.duration);
        place.date = Date.parse(req.body.date);
  
        place.save()
          .then(() => res.json('PLace updated!'))
          .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;