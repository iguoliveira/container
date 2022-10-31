import sqlite3 from 'sqlite3'

const db = new sqlite3.Database('database.sqlite3')

export const createUserTable = async () => {
    db.serialize(() => {
        db.exec(`CREATE TABLE IF NOT EXISTS User (id INTEGER PRIMARY KEY AUTOINCREMENT, login TEXT, password TEXT)`)
    })
}

export const createProductTable = async () => {
    db.serialize(() => {
        db.exec(`CREATE TABLE IF NOT EXISTS Product (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, qtd INTEGER, price NUMERIC)`)
    })
}

export const addUserInUserTable = async () => {
    db.serialize(() => {
        db.exec(`INSERT INTO User (login, password) VALUES ('Igor', '123')`)
    })
}

export const addItemInProductTable = async () => {
    db.serialize(() => {
        db.exec(`INSERT INTO Product (name, qtd, price) VALUES ('Lapis', 500, 5.25)`)
        db.exec(`INSERT INTO Product (name, qtd, price) VALUES ('Caneta', 100, 10.25)`)
        db.exec(`INSERT INTO Product (name, qtd, price) VALUES ('Carro', 50, 49999.99)`)
    })
}

export { db }