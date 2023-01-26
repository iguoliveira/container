import { initTRPC } from '@trpc/server';
import superjson from 'superjson';
import { monkeyRouter } from './routes/monkey';

export const t = initTRPC.create({
    transformer: superjson,
    errorFormatter({ shape }) {
        return shape
    }
});

export const router = t.router;
export const publicProcedure = t.procedure;

export const appRouter = router({
    monkey: monkeyRouter
});

export type AppRouter = typeof appRouter;
