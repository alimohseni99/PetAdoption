import { z } from "zod";

export const inputSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  breed: z.string(),
  age: z.number(),
});

export type Input = z.infer<typeof inputSchema>;
