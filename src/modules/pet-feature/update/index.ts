import { PetDb, PetType } from "../types";

export const updatePet =
  (db: PetDb) => async (input: string, data: Partial<PetType>) => {
    return await db.pets.updatePet(input, data);
  };
