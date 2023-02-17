import { openDb } from "../configDB.js";


//email, cpf colocar depois


export async function createTable(){
    openDb().then(db => {
        db.exec('CREATE TABLE IF NOT EXISTS clientes ( id INTEGER PRIMARY KEY, nome TEXT, idade INTEGER)')
    })
}

export async function insertcliente(cliente){
    openDb().then(db => {
        db.run('INSERT INTO clientes ( nome, idade) VALUES (?,?)', [cliente.nome, cliente.idade])
    })
}

export async function updatecliente(cliente){
    openDb().then(db => {
        db.run('UPDATE clientes SET nome = ?, idade = ? WHERE id = ?', [cliente.nome, cliente.idade, cliente.id])
    })
}
  

export async function selectclientes(){
    return openDb().then(db => {
        return db.all('SELECT * FROM clientes')
        .then(res=>res)
    })
}


export async function selectcliente(id){
    return openDb().then(db => {
        return db.get('SELECT * FROM clientes WHERE id=?', [id])
        .then(res=>res)
    })
}