import express from 'express'
import cors from 'cors'

export const app = express()
const PORT = 3000

app.use(cors({
    origin: [
        "http://localhost:5173"
    ]
}))

app.listen(PORT, () => console.log(`Server running in http://localhost:${PORT}`))