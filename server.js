// Import required packages
const express = require('express'); // Import the Express framework
const multer = require('multer');   // Import Multer, a middleware for handling file uploads
const path = require('path');       // Node.js built-in module for working with file paths

// Create an Express application
const app = express();

// Set up storage configuration for Multer
const storage = multer.diskStorage({
    // Define the destination folder for uploaded files
    destination: function(req, file, cb) {
        cb(null, 'uploads/'); // Files will be saved in the 'uploads' directory
    },
    // Define how the uploaded file should be named
    filename: function(req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
        // The file name will be something like 'document-1633029123456.pdf'
    }
});

// Initialize Multer with the storage configuration
const upload = multer({ storage: storage });

// Middleware to serve static files (e.g., CSS, JS, images) from the 'public' folder
app.use(express.static('public'));

// Middleware to parse URL-encoded data (from form submissions)
app.use(express.urlencoded({ extended: true }));

// Middleware to parse JSON data
app.use(express.json());

// Define a POST route to handle form submissions to '/register'
app.post('/register', upload.single('document'), (req, res) => {
    // Extract form data from the request
    const { name, email, password } = req.body;

    // Get information about the uploaded file
    const document = req.file;

    // Here, you would typically save the user data and document info to your database
    console.log('User Name:', name);
    console.log('Email:', email);
    console.log('Document:', document);

    // Respond to the client with a success message
    res.status(200).send('Registration successful');
});

// Start the server on port 3000 and log a message to the console
app.listen(5500, () => {
    console.log('Server started on http://localhost:5500');
});
