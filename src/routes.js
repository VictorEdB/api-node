import { Router } from "express";
import { createTable, insertcliente, updatecliente, selectcliente, selectclientes, deletecliente } from './controler/clientes.js';

const router = Router();

router.get('/', (req, res) => {
    res.json({
        "statuscode": "200",
        "msg": "Api rodando"
    })
})

router.get('/clientes', selectclientes);
router.get('/cliente', selectcliente);
router.post('/cliente', insertcliente);
router.put('/cliente', updatecliente);
router.delete('/cliente', deletecliente);

export default router
