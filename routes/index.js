const express = require('express');
const router = express.Router();


const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

// Index route
router.get('/', (req, res) => {
  res.render('index', { title: "Mini Messageboard", messages: messages });
});

// New message form route
router.get('/new', (req, res) => {
  res.render('form');
});

// Handling form submission
router.post('/new', (req, res) => {
  const { messageText, messageUser } = req.body;
  messages.push({ text: messageText, user: messageUser, added: new Date() });
  res.redirect('/');
});

module.exports = router;
