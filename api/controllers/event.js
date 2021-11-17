const Events = require('../models/event');
const User = require('../models/users');
const mongoose = require('mongoose');

module.exports = {
  getEvents: (req, res) => {
    Events.find().populate('eventId', 'name').then((events) => {
      res.status(200).json({
        events
      })
    }).catch(error => {
      res.status(500).json({
        error
      })
    });
  },

  getEvent: (req, res) => {
    const eventId = req.params.eventId;

    Events.findById(eventId).then((event) => {
      res.status(200).json({
        event
      })
    }).catch(error => {
      res.status(500).json({
        error
      })
    });
  },

  createEvent: (req, res) => {
    // const { path: image  } = req.file;
    const {  name, nameEvent, dateEvent, locationEvent, timeEvent, descriptionEvent, _id,
      backgroundImage, eventColorTitle, eventColorDesc, eventColorText, eventBackgroundColor, eventColorIcon } = req.body;

    User.findById(_id).then((event) => {
      if (!event) {
        return res.status(404).json({
          message: 'Event not found'
        })
      }

      const events = new Events({
        _id: _id,
        name,
        nameEvent,
        dateEvent,
        locationEvent,
        timeEvent,
        descriptionEvent,
        // image: image.replace('\\','/'),
        backgroundImage,
        eventColorTitle,
        eventColorDesc,
        eventColorIcon,
        eventColorText,
        eventBackgroundColor
      });

      return events.save();
    }).then(() => {
      res.status(200).json({
        message: 'Created Event'
      })
    }).catch(error => {
      res.status(500).json({
        error
      })
    });
  },

  updateEvent: (req, res) => {
    const eventId = req.params.eventId;
    Events.findById(eventId).then((event) => {
      if (!event) {
        return res.status(404).json({
          message: 'Event not found'
        })
      }
    }).then(() => {
      Events.updateOne({_id: eventId }, req.body).then(() => {
        res.status(200).json({
          message: 'Event Updated'
        })
      }).catch(error => {
        res.status(500).json({
          message: 'Event not update',
          error
        })
      });
    })
  },
}
