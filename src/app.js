import express from 'express';
import fs from 'fs';
import https from 'https'
import cors from 'cors'
// import { createTable } from './controler/clientes.js';

// createTable();

const app = express();
app.use(express.json());
app.use(cors());

import router from './routes.js'
app.use(router);

app.listen(3000, () => console.log('Api rodando.'))

https.createServer({
    cert:fs.readFileSync('src/SSl/code.crt'),
    key:fs.readFileSync('src/SSl/code.key')
},
    app
).listen(3001,() => console.log('Rodando um https'));

