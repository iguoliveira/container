import Router from "express";
import { db } from "./database.js";

const controller = Router();

controller.get("/products-list", async (req, res) => {
  db.serialize(() => {
    db.all(`SELECT * FROM Product`, (error, rows) => {
      if (error) return res.status(500).json({ error, msg: error.message });
      res.json(rows);
    });
  });
});

controller.get("/users-list", async (req, res) => {
  db.serialize(() => {
    db.all(`SELECT * FROM User`, (error, rows) => {
      if (error) return res.status(500).json({ error, msg: error.message });
      res.json(rows);
    });
  });
});

controller.get("/orders-list", async (req, res) => {
  db.serialize(() => {
    db.all(`SELECT * FROM ProductOrder`, (error, rows) => {
      if (error) return res.status(500).json({ error, msg: error.message });
      res.json(rows);
    });
  });
});

controller.post("/insert-order", async (req, res) => {
  const { name, totalPrice } = req.body;
  db.serialize(() => {
    db.run("INSERT INTO ProductOrder ( name, totalPrice ) VALUES (?,?)", [
      name,
      totalPrice,
    ]);
  });
});

controller.post("/insert-product", async (req, res) => {
  const { name, qtd, price, orderId } = req.body;
  db.serialize(() => {
    db.run(
      "INSERT INTO Product ( name, qtd, price, orderId) VALUES (?,?,?,?)",
      [name, qtd, price, orderId]
    );
  });
});

controller.post("/insert-user", async (req, res) => {
  const { login, password } = req.body;
  db.serialize(() => {
    db.run("INSERT INTO User ( login, password ) VALUES (?,?)", [
      login,
      password,
    ]);
  });
});

controller.patch("/update-product", async (req, res) => {
  const { id, name, qtd, price } = req.body;

  db.serialize(() => {
    db.run("UPDATE Product SET name = ?, qtd = ?, price = ? WHERE id = ?", [
      name,
      qtd,
      price,
      id,
    ]);
  });
});

controller.delete("/delete-product", async (req, res) => {
  const { id } = req.body;

  db.serialize(() => {
    db.run("DELETE FROM Product WHERE id = ?", [id]);
  });
});

controller.delete("/delete-order", async (req, res) => {
  const { id } = req.body;

  db.serialize(() => {
    db.run("DELETE FROM ProductOrder WHERE id = ?", [id]);
  });
});

export { controller };
