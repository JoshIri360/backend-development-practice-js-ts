const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log('This always runs!');
    next();
});

app.use('/',(req, res, next) => {
    console.log('This always runs too!');
    next();
});

app.use('/add-product',(req, res, next) => {
    console.log('In the middleware!');
    res.send('<h1>The "Add Product" Page!</h1>');
});

app.use('/',(req, res, next) => {
    console.log('In another middleware!');
    res.send('<h1>Hello from Express!</h1>');
});

const port = 3000;

app.listen(port);

console.log(`Server started on port: ${port}`);