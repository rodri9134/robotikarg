import { Request, Response,Express } from 'express';
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.post('/', (req:Request, res:Response) => {});

app.listen(3002, () => {
console.log('Servidor corriendo');
});
