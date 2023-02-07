import express from 'express'
import cors from 'cors'
import * as trpcExpress from '@trpc/server/adapters/express';
import { appRouter } from './server';

export const app = express()
const PORT = 3000

app.use(cors({
    origin: [
        "http://localhost:5173"
    ]
}))

app.use(
    '/trpc',
    trpcExpress.createExpressMiddleware({
        router: appRouter,
    }),
);

app.listen(PORT, () => console.log(`Server running in http://localhost:${PORT}`))