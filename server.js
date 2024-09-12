const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Database connection
const db = mysql.createConnection({
    host: 'localhost:3306',
    user: 'root',
    password: 'nikhil@123',
    database: 'courtlink_db'
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL: ', err);
    } else {
        console.log('Connected to MySQL database');
    }
});

// Routes

// Get user dashboard data (cases, payments, etc.)
app.get('/dashboard/:userId', (req, res) => {
    const userId = req.params.userId;
    const dashboardData = {};

    // Fetch upcoming hearings
    const hearingsQuery = 'SELECT * FROM hearings WHERE user_id = ?';
    db.query(hearingsQuery, [userId], (err, results) => {
        if (err) throw err;
        dashboardData.hearings = results;

        // Fetch recent payments
        const paymentsQuery = 'SELECT * FROM payments WHERE user_id = ?';
        db.query(paymentsQuery, [userId], (err, paymentsResults) => {
            if (err) throw err;
            dashboardData.payments = paymentsResults;

            // Fetch case updates
            const updatesQuery = 'SELECT * FROM case_updates WHERE user_id = ?';
            db.query(updatesQuery, [userId], (err, updatesResults) => {
                if (err) throw err;
                dashboardData.updates = updatesResults;

                // Fetch lawyer recommendations
                const lawyerQuery = 'SELECT * FROM lawyers WHERE field_of_expertise = ?';
                db.query(lawyerQuery, ['relevant field'], (err, lawyerResults) => {
                    if (err) throw err;
                    dashboardData.lawyers = lawyerResults;

                    res.json(dashboardData);
                });
            });
        });
    });
});

// Handle profile updates
app.post('/update-profile', (req, res) => {
    const { userId, name, email, password } = req.body;
    const updateQuery = 'UPDATE users SET name = ?, email = ?, password = ? WHERE id = ?';
    db.query(updateQuery, [name, email, password, userId], (err, result) => {
        if (err) throw err;
        res.send('Profile updated successfully');
    });
});

// Server listening
const port = 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
