import Router from 'express';
import { db } from './database.js'

const controller = Router()

controller.get('/products-list', async (req, res) => {
    db.serialize(() => {
        db.all(`SELECT * FROM Product`, (error, rows) => {
            if (error) return res.status(500).json({ error, msg: error.message })
            res.json(rows)
        })
    })
})

controller.get('/users-list', async (req, res) => {
    db.serialize(() => {
        db.all(`SELECT * FROM User`, (error, rows) => {
            if (error) return res.status(500).json({ error, msg: error.message })
            res.json(rows)
        })
    })
})

controller.post('/insert-product', async (req, res) => {
    const { name, qtd, price } = req.body
    db.serialize(() => {
        db.run('INSERT INTO Product ( name, qtd, price ) VALUES (?,?,?)', [name, qtd, price])
    })
})

controller.post('/insert-user', async (req, res) => {
    const { login, password } = req.body
    db.serialize(() => {
        db.run('INSERT INTO User ( login, password ) VALUES (?,?)', [login, password])
    })
})

export { controller }