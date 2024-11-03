import { PetDb } from "../types";

export const deletePet = (db: PetDb) => async (input: string) => {
  return await db.pets.deletePet(input)
}