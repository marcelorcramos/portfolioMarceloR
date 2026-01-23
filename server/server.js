const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const { error } = require('console');

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

  const emailRegex = /^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ 
      success: false, 
      error: 'Email inválido.' 
    });
  }

const stmt = db.prepare('INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)');
  stmt.run([name, email, message], function (err) {
    if (err) {
      console.error('Erro ao salvar no banco:', err);
      return res.status(500).json({ 
        success: false, 
        error: 'Erro ao salvar mensagem no banco de dados.' 
      });
    }
    
    console.log('Mensagem salva com ID:', this.lastID);
    res.status(201).json({ 
      success: true, 
      id: this.lastID,
      message: `Olá ${name}, sua mensagem foi enviada com sucesso! Entrarei em contato em breve.`
    });
  });
  stmt.finalize();
});

app.get('/api/contacts', (req, res) => {
  const{ limit = 50, offset = 0 } = req.query;

  db.all(
    'SELECT * FROM contacts ORDER BY created_at DESC LIMIT ? OFFSET ?',
    [limit, offset],
    (err, rows) => {
      if (err) {
        console.error('Error fetching messages', err);
        return res.status(500).json({
          success: false,
          error: 'Erro trying to fetch messages.'
         });
      }

      db.get('SELECT COUNT(*) AS count FROM contacts', (err, count) => {
        if (err) {
          res.json({
            success: true,
            contacts: rows,
            total: rows.length
        });
      } else {
          res.json({
            success: true,
            contacts: rows,
            total: count.total,
            uread:rows.filter(r => !r.read).length
          });
      }
    });
  }
  );
});

app.put('/api/contacts/:id/read', (req, res) => {
  const { id } = req.params;

  db.run('UPDATE contacts SET read = 1 WHERE id = ?', [id], function(err) {
    if (err) {
      return res.status(500).json({
        success: false,
        error: 'Error marking message as read.'
      });
    }

    res.json({
      success: true,
      message: 'Message marked as read.',
      changes: this.changes
    });
  });
});

app.delete('/api/contacts/:id', (req, res) => {
  const { id } = req.params;

  db.run('DELETE FROM contacts WHERE id = ?', [id], function(err) {
    if (err) {
      return res.status(500).json({
        success: false,
        error: 'Error deleting message.'
      });
    }
    res.json({
      success: true,
      message: 'Message deleted successfully.',
      changes: this.changes
    });
  });
});

app.get('/api/stats', (req, res) => {
  db.get('SELECT COUNT(*) AS total, SUM(CASE WHEN read = 0 THEN 1 ELSE 0 END) AS unread FROM contacts', (err, stats) => {
if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(stats);
  });
});

app.get('/admin', (req, res) => {
  res.sendFile(path.join(__dirname, 'admin.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log(`Contact Endpoint: http://localhost:${PORT}/api/contact`);
  console.log(`Admin Panel: http://localhost:${PORT}/admin`);
});

process.on('uncaughtException', (err) => {
  console.error('Uncaught Exception:', err);
});