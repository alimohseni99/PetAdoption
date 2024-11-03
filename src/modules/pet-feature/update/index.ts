import { PetDb, PetType } from "../types";
import { Input } from "./input";

export const updatePet =
  (db: PetDb) => async (input: Input, data: Partial<PetType>) => {
    return await db.pets.updatePet(input.id, data);
  };
