import { PetDb } from "../types";
import { Input } from "./input";

export const getPetById = (db: PetDb) => async (input: Input) => {
  return await db.pets.getPetById(input.id);
};
