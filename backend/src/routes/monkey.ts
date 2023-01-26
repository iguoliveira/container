import { router, publicProcedure } from '../server'
import { prisma } from '../utils/script'
import { TRPCError } from '@trpc/server'

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
    })
})