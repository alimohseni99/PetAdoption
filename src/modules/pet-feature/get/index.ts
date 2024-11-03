import { PetDb } from "../types";

export const getPetById = (db: PetDb) => async (input: string) => {
  return await db.pets.getPetById(input);
};
