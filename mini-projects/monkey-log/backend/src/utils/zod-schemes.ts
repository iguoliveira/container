import { z } from 'zod'

export const monkeyScheme = z.object({
    name: z.string(),
    age: z.number(),
    photo: z.string(),
    specie: z.string()
})

export const userScheme = z.object({
    name: z.string(),
    email: z.string(),
    sex: z.string()
})