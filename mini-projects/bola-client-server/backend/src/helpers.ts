import { db } from "./database"

export const createTeamTable = async () => {
    db.serialize(() => {
        db.exec("CREATE TABLE IF NOT EXISTS Team (teamId INTEGER PRIMARY KEY, name TEXT, globalRanking INTEGER)")
    })
}

export const createMatchTable = async () => {
    db.serialize(() => {
        db.exec("CREATE TABLE IF NOT EXISTS Match (matchId INTEGER PRIMARY KEY, team1Score INTEGER, team2Score INTEGER, team1Fk INTEGER, team2Fk INTEGER, FOREIGN KEY (team1Fk) REFERENCES Team(teamId), FOREIGN KEY (team2Fk) REFERENCES Team(teamId))")
    })
}