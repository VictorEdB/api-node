import { openDb } from "../configDB.js";

export async function createTable(){
    openDb().then(db => {
        db.exec('CREATE TABLE IF NOT EXISTS clientes ( id INTEGER PRIMARY KEY, nome TEXT, idade INTEGER)')
    })
}

export async function insertcliente(clientes){
    openDb().then(db => {
        db.run('INSERT INTO clientes ( nome, idade) VALUES (?,?),' [clientes.nome, clientes.idade])
    })
}


