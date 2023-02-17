// import { openDb } from './configDB.js';
import { createTable, insertcliente, updatecliente, selectcliente, selectclientes } from './controler/clientes.js';

import express from 'express';
const app = express();
app.use(express.json());

createTable();

app.get('/', function(req, res){
    res.send('Api rodando');
});

app.get('/clientes', async function(req, res){
    let clientes = await selectclientes();
    res.json(clientes);
});

app.get('/cliente', async function(req, res){
    let cliente = await selectcliente(req.body.id);
    res.json(cliente);
});

app.post('/clientes', function(req, res){
    insertcliente(req.body);
    res.json({
        "statuscode": 200
    })
    
});
app.put('/clientes', function(req, res){
    if(req.body && !req.body.id){
        res.json({
            "statuscode": "400",
            "msg":"Você precisa informar um id"
        })
    } 
    
    else{
        updatecliente(req.body);
            res.json({
                "statuscode": 200
    })
}
   
});
app.listen(3001, () => console.log('Api rodando.'))