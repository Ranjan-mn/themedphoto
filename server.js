const express = require('express');
var app = express();


app.use(express.static(__dirname + '/public/photography'));

app.get('/', (req , res , next) => {
    // res.render('./playground/photography/index.html');
    res.render('index.html');
    next();
});

app.listen(3000, () => {
    console.log('Example app listening to port');
});
