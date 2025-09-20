// Simple in-memory user storage (for demo)
const usersFile = path.join(__dirname, 'users.json');

// Signup route

app.post('/signup', (req, res) => {
  const { username, password, isAdmin } = req.body;
  if (!username || !password) {
    return res.status(400).json({ success: false, message: 'Username and password required.' });
  }
  fs.readFile(usersFile, 'utf8', (err, data) => {
    let users = [];
    if (!err && data) {
      try { users = JSON.parse(data); } catch (e) { users = []; }
    }
    if (users.find(u => u.username === username)) {
      return res.status(409).json({ success: false, message: 'Username already exists.' });
    }
    users.push({ username, password, isAdmin: !!isAdmin }); // In production, hash the password!
    fs.writeFile(usersFile, JSON.stringify(users, null, 2), err => {
      if (err) return res.status(500).json({ success: false, message: 'Failed to save user.' });
      res.json({ success: true, message: 'Signup successful!' });
    });
  });
});

// Login route

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ success: false, message: 'Username and password required.' });
  }
  fs.readFile(usersFile, 'utf8', (err, data) => {
    let users = [];
    if (!err && data) {
      try { users = JSON.parse(data); } catch (e) { users = []; }
    }
    const user = users.find(u => u.username === username && u.password === password);
    if (!user) {
      return res.status(401).json({ success: false, message: 'Invalid credentials.' });
    }
    res.json({ success: true, message: 'Login successful!', isAdmin: !!user.isAdmin });
  });
});
// Route to get all messages (admin)
app.get('/messages', (req, res) => {
  fs.readFile(messagesFile, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ success: false, message: 'Could not read messages.' });
    }
    let messages = [];
    try {
      messages = JSON.parse(data);
    } catch (e) {
      messages = [];
    }
    res.json(messages);
  });
});

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const messagesFile = path.join(__dirname, 'messages.json');

app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;
  const newMessage = { name, email, message, date: new Date().toISOString() };
  // Read existing messages
  fs.readFile(messagesFile, 'utf8', (err, data) => {
    let messages = [];
    if (!err && data) {
      try {
        messages = JSON.parse(data);
      } catch (e) {
        messages = [];
      }
    }
    messages.push(newMessage);
    fs.writeFile(messagesFile, JSON.stringify(messages, null, 2), (err) => {
      if (err) {
        console.error('Error saving message:', err);
        return res.status(500).json({ success: false, message: 'Failed to save message.' });
      }
      console.log('Contact form submitted and saved:', newMessage);
      res.json({ success: true, message: 'Message received and saved!' });
    });
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
