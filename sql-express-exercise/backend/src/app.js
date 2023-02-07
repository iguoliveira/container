import express from "express";
import cors from "cors";
import { controller } from "./routes.js";
import {
  createProductTable,
  createUserTable,
  addUserInUserTable,
  createOrderTable,
} from "./database.js";

const app = express();

createOrderTable();
createUserTable();
createProductTable();
// addUserInUserTable();
app.use(express.json());
app.use(cors());
app.use(controller);

export { app };
