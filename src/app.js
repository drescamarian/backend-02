import express from "express";
import { encrypt, decrypt } from './encryption.js';

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World! this is the root route of the app :)');
})

function message(req, res, next) {
    if (req.body.message === undefined) {
        res.status(400).send({
            error: 'Message is required'
        })
    }
    if (req.body.message === '') {
        res.status(400).send({
            error: 'Message cannot be empty'
        })
    }
    if (typeof req.body.message !== 'string') {
        res.status(400).send({
            error: 'Message must be a string'
        })
    }
    next();
}

// encrypt = verschlüsseln
app.post('/encrypt', message, (req, res) => {
    const { message } = req.body;
    const encryptedData = encrypt(message);
    res.send({
      cypher: encryptedData
    });
})

function cypher(req, res, next) {
    if (req.body.cypher === undefined) {
        res.status(400).send({
            error: 'Cypher is required'
        })
    }
    if (req.body.cypher === '') {
        res.status(400).send({
            error: 'Cypher cannot be empty'
        })
    }
    if (typeof req.body.cypher !== 'string') {
        res.status(400).send({
            error: 'Cypher must be a string'
        })
    }
    next();
}

// decrypt = entschlüsseln
app.post('/decrypt', cypher, (req, res) => {
    const { cypher } = req.body;
    const decryptedData = decrypt(cypher);
    res.send({
      message: decryptedData
    });
})

export default app;