import { router, publicProcedure } from '../server'
import { prisma } from '../utils/script'
import { createInputMiddleware, TRPCError } from '@trpc/server'
import { monkeyScheme } from '../utils/zod-schemes'

export const monkeyRouter = router({
    getAllMonkeys: publicProcedure.query(async () => {
        try {
            const allMonkeys = await prisma.monkey.findMany()
            return { allMonkeys }

        } catch (error) {
            throw new TRPCError({
                code: 'INTERNAL_SERVER_ERROR',
                cause: error,
                message: 'Failed to get all monkeys'
            })
        }
    }),
    createMonkey: publicProcedure.input(monkeyScheme).mutation(async ({ input }) => {
        try {
            const newMonkey = await prisma.monkey.create({
                data: {
                    name: input.name,
                    age: input.age,
                    photo: input.photo,
                    specie: input.specie
                }
            })
            return { newMonkey }
        } catch (error) {
            throw new TRPCError({
                code: 'INTERNAL_SERVER_ERROR',
                cause: error,
                message: 'Failed to create a monkey'
            })
        }
    })
})