import { Router } from "express";
import { db } from "./database";

const controller = Router();

// GETs
controller.get("/team/:name/:id", async (req, res) => {
  db.serialize(() => {
    db.all(
      "SELECT * FROM Team WHERE name=? AND teamId=?",
      [req.params.name, req.params.id],
      (error: any, rows: any) => {
        if (error) return res.status(500).json({ error, msg: error.message });
        res.json(rows);
      }
    );
  });
});

controller.get("/all-teams", async (req, res) => {
  db.serialize(() => {
    db.all("SELECT * FROM Team", (error: Error, rows: any) => {
      if (error) return res.status(500).json({ error, msg: error.message })
      res.json({ teams: rows })
    })
  })
})

controller.get("/actual-match", async (req, res) => {
  db.serialize(() => {
    db.all("SELECT * FROM Match", (error: Error, rows: any) => {
      if (error) return res.status(500).json({ error, msg: error.message })
      res.json(rows)
    })
  })
})

controller.get("/match-teams/:team1Id/:team2Id", async (req, res) => {
  db.serialize(() => {
    db.all("SELECT * FROM Team WHERE teamId = ? and teamId = ?", [req.params.team1Id, req.params.team2Id], (error: Error, rows: any) => {
      if (error) return res.status(500).json({ error, msg: error.message })
      res.json({ teams: rows })
    })
  })
})

controller.get("/match-teams/:teamId", async (req, res) => {
  db.serialize(() => {
    db.all("SELECT * FROM Match WHERE team1Fk = ? OR team2Fk = ?", [req.params.teamId], (error: Error, rows: any) => {
      if (error) return res.status(500).json({ error, msg: error.message })
      res.json(rows)
    })
  })
})

// POST
controller.post("/register-team", async (req, res) => {
  db.serialize(() => {
    db.run("INSERT INTO Team (name, globalRanking) VALUES (?, ?)", [req.body.name, req.body.globalRanking])
  })
})

controller.post("/begin-match", async (req, res) => {
  db.serialize(() => {
    db.run("INSERT INTO Match (team1Score, team2Score, team1Fk, team2Fk) VALUES (?,?,?,?)", [req.body.team1Score, req.body.team2Score, req.body.team1Fk, req.body.team2Fk])
  })
})

export { controller };
