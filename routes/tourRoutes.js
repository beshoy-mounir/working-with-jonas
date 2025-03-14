const express = require('express');

const { getAllTours, postTour, getTourByID, updateTour, deleteTour } = require(
  `${__dirname}/../Controllers/tourControler.js`,
);

const router = express.Router();
// router.param('id', checkID);

router.route('/').get(getAllTours).post(postTour);
router.route('/:id').get(getTourByID).patch(updateTour).delete(deleteTour);

module.exports = router;
