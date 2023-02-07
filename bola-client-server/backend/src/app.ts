import express from "express";
import cors from "cors";
import { controller } from "./controller";
import { createMatchTable, createTeamTable } from "./helpers";

const PORT = 3000;
const app = express();

app.listen(PORT, () =>
  console.log(
    `\x1b[32m[DEV]\x1b[0m Server running on \x1b[35mhttp://localhost:${PORT}\x1b[0m`
  )
);

createMatchTable()
createTeamTable()
app.use(cors());
app.use(express.json());
app.use(controller);
