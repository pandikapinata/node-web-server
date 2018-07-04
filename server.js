const express = require('express');

var app = express();

app.get('/',(req, res) => {
    // res.send('<h1> Hello Express</h1>');
    res.send({
        name: 'Pandika',
        likes: [
            'Gaming',
            'Football'
        ]
    });
});

app.get('/about', (req, res) =>{
    res.send('About Page');
});

app.get('/bad', (req, res) =>{
    res.send({
        errorMessage:'Unable to fetch data'
    });
});
app.listen(3000);