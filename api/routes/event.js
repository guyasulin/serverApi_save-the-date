const express = require('express');
const router = express.Router();

const upload = require('../middlewares/upload');

const {
  getEvent,
  createEvent,
  getEvents,
  updateEvent
} = require('../controllers/event');

router.get('/', getEvents);
router.get('/:eventId', getEvent);
router.post('/', createEvent);
router.patch('/:eventId',  upload.single('image') ,updateEvent);

module.exports = router;
