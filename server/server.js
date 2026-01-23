const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 5000;

app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}))
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

const db = new sqlite3.Database('./contacts.db', (err) => {
  if (err) {
    console.error('Could not connect to database', err.message);
  } else {
    console.log('Connected to SQLite database');
  }
});

db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS contacts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    message TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    read BOOLEAN DEFAULT 0
  )
  `, (err) => {
    if (err) {
      console.error('Could not create table', err.message);
    } else {
      console.log('Contacts table ready');
    }
  });
});

app.get('/api',(req, res) => {
  res.json({
    message: 'Marcelo Ramos Portfolio API',
    status: 'online',
    endpoints:[
      'POST /api/contact - Enviar mensagem de contato',
      'GET /api/contacts - Listar todas as mensagens',
      'PUT /api/contacts/:id/read - Marcar como lida',
      'DELETE /api/contacts/:id - Excluir mensagem'
    ]
  });
});

app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;

  console.log('Received contact:', name, email, message);

  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      error: 'Name, email, and message are required.'
    });
  }

  const stmt = db.prepare('INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)');
  stmt.run(name, email, message, function(err) {
    if (err) {
      console.error('Error inserting contact', err.message);
      return res.status(500).json({
        success: false,
        id: this.lastID,
        message: `Hello ${name}, Your message has been sent successfully. We will be in touch soon!`
      });
    });
    stmt.finalize();
});


