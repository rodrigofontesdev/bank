import { z } from 'zod'

export const authenticationSchema = z.object({
  username: z.string().trim().min(1, 'O campo usuário é obrigatório.'),
  password: z.string().trim().min(1, 'O campo senha é obrigatório.'),
  remember: z.boolean(),
})

export type Authentication = z.infer<typeof authenticationSchema>
