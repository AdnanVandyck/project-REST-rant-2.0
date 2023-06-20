const express = require('express');
const app = express();
require('dotenv').config();

app.get('/', (req, res) => {
    res.send('Peace World!')
});

app.listen(3000);

