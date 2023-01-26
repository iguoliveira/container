import { initTRPC } from '@trpc/server';
import * as trpcExpress from '@trpc/server/adapters/express';
import superjson from 'superjson';
import { app } from './index'

export const t = initTRPC.create({
    transformer: superjson,
    errorFormatter({ shape }) {
        return shape
    }
});

export const router = t.router;
const publicProcedure = t.procedure;

const appRouter = router({});

app.use(
    '/trpc',
    trpcExpress.createExpressMiddleware({
        router: appRouter,
    }),
);

export type AppRouter = typeof appRouter;
