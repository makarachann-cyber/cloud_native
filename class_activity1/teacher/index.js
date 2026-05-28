const express = require('express');
const app = express();
// Add Assignment API
app.post('/addassignment', (req, res) => {
    res.send('<html><body>INSIDE ADD ASSIGNMENT API..</body></html>');
});

// Search Student API
app.get('/searchstudent', (req, res) => {
    res.send('<html><body>INSIDE SEARCH STUDENT API..</body></html>');
});

// Delete Assignment API
app.delete('/removeassignment', (req, res) => {
    res.send('<html><body>INSIDE DELETE ASSIGNMENT API..</body></html>');
});

// START THE EXPRESS SERVER. 5000 is the PORT NUMBER
app.listen(5001, () =>
console.log('EXPRESS Server Started at Port No: 5001'));