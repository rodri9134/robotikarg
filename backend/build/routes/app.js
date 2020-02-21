"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
app.use(cors());
app.post('/', (req, res) => { });
app.listen(3002, () => {
    console.log('Servidor corriendo');
});
