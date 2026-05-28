const e1 = require('express');
const app = e1();
// Student Login API
app.post('/studentlogin', (req, res) => {
    res.send('<html><body>INSIDE STUDENT LOGIN API..</body></html>');
});

// view Assignment API
app.get('/viewassignment', (req, res) => {
    res.send('<html><body>INSIDE VIEW ASSIGNMENT API..</body></html>');
});

// Update Profile API
app.put('/studentupdateprofile', (req, res) => {
    res.send('<html><body>INSIDE STUDENT UPDATE PROFILE API..</body></html>');
});

// START THE EXPRESS SERVER. 5000 is the PORT NUMBER
app.listen(5000, () =>
console.log('EXPRESS Server Started at Port No: 5000'));