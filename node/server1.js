const express = require('express');
const path = require('path');
const app = express();
const publicPath = path.join(__dirname,'node');

app.use(express.static(publicPath));
app.listen(9000);
console.log(publicPath)


