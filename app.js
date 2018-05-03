const express = require('express');
var app = express();
const port = process.env.PORT || 3000;
app.use(express.static(__dirname + '/public/photography'));

app.get('/', (req , res , next) => {
    // res.render('./playground/photography/index.html');
    res.render('index.html');
    next();
});

app.listen(port, () => {
    console.log('Example app listening to port');
});
