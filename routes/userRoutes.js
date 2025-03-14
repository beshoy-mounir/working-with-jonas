const express = require('express');

const {
  getAllUsers,
  getUserByID,
  checkID,
  postUser,
  CheckNewUser,
  patchUser,
  deleteUser,
} = require(`${__dirname}/../Controllers/userControler.js`);

const router = express.Router();
router.param('id', checkID);

router.route('/').get(getAllUsers).post(CheckNewUser, postUser);
router.route('/:id').get(getUserByID).patch(patchUser).delete(deleteUser);

module.exports = router;
