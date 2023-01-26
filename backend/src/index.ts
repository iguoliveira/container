import express from 'express'
import cors from 'cors'

export const app = express()
const PORT = 3000

app.use(cors())
app.listen(PORT, () => {console.log("Server running in http://localhost:",PORT)})