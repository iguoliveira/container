import sqlite3 from 'sqlite3'

const db = new sqlite3.Database('copa.sqlite3')

export { db }