import { z } from "zod"

export const datesDto = z.object({
  start: z.string().datetime({ offset: true }),
  end: z.string().datetime({ offset: true }),
})

export type Dates = z.infer<typeof datesDto>
