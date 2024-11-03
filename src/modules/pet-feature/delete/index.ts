import { PetDb } from "../types";
import { Input } from "./input";

export const deletePet = (db: PetDb) => async (input: Input) => {
  return await db.pets.deletePet(input.id);
};
