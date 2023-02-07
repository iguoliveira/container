import { app } from './app.js'

const PORT = 8000
app.listen(PORT, () => console.log(`\x1b[32m[START]\x1b[0m Server is running on \x1b[35mhttp://localhost:${PORT}\x1b[0m`))