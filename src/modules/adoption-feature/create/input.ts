import { z } from "zod";

export const inputSchema = z.object({
  petId: z.string(),
  petName: z.string(),
  adopterName: z.string(),
});

export type Input = z.infer<typeof inputSchema>;
