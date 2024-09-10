const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = "https://nikhildarji123.github.io/final-year-project-/index.html";

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MySQL connection
const connection = mysql.createConnection({
  host: 'localhost:3306',
  user: 'root',
  password: 'nikhil@123',
  database: 'your_database_name'
});

connection.connect(err => {
  if (err) {
    console.error('Error connecting to the database:', err.stack);
    return;
  }
  console.log('Connected to the database.');
});

// Route to handle data from the front-end
app.post('database.sql', (req, res) => {
  const { name, email, password } = req.body;
  const query = 'INSERT INTO users (name, email, password) VALUES (?, ?, ?)';

  connection.query(query, [name, email, password], (err, result) => {
    if (err) {
      console.error('Error inserting user:', err.stack);
      res.status(500).send('Error inserting user');
      return;
    }
    res.send('User added successfully');
  });
});

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

// Route to get all users
app.get('database.sql', (req, res) => {
  const query = 'SELECT * FROM users';

  connection.query(query, (err, results) => {
    if (err) {
      console.error('Error fetching users:', err.stack);
      res.status(500).send('Error fetching users');
      return;
    }
    res.json(results);
  });
});
