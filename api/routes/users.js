const express = require('express');
const router = express.Router();

const {
  signup,
  login,
  updateUser,
  createEvent
} = require('../controllers/users');

router.post('/signup', signup);
router.post('/login', login );
router.patch('/:userId', updateUser);

module.exports = router;
