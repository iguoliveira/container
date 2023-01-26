import { TRPCError } from '@trpc/server'
import { router } from '../server'
import { t } from '../server'
import { prisma } from '../utils/script'

export const monkeyRouter = router({
    getAllMonkeys: t.procedure.query(async () => {
        try {
            const allMonkeys = await prisma.monkey.findMany()
            return allMonkeys

        } catch (error) {
            throw new TRPCError({
                code: 'INTERNAL_SERVER_ERROR',
                cause: error,
                message: 'Failed to get all monkeys'
            })
        }
    })
})