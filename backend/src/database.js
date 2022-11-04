import sqlite3 from "sqlite3";

const db = new sqlite3.Database("database.sqlite3");

export const createOrderTable = async () => {
  db.serialize(() => {
    db.exec(
      `CREATE TABLE IF NOT EXISTS ProductOrder (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, totalPrice NUMERIC)`
    );
  });
};

export const createUserTable = async () => {
  db.serialize(() => {
    db.exec(
      `CREATE TABLE IF NOT EXISTS User (id INTEGER PRIMARY KEY AUTOINCREMENT, login TEXT, password TEXT)`
    );
  });
};

export const createProductTable = async () => {
  db.serialize(() => {
    db.exec(
      `CREATE TABLE IF NOT EXISTS Product (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, qtd INTEGER, price NUMERIC, orderId INTEGER, FOREIGN KEY (orderId) REFERENCES ProductOrder(id))`
    );
  });
};

export const addUserInUserTable = async () => {
  db.serialize(() => {
    db.exec(`INSERT INTO User (login, password) VALUES ('Igor', '123')`);
  });
};

export { db };
