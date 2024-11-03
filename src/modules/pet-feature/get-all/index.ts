import { PetDb } from "../types";

export const getAllPets = (db: PetDb) => async () => {
  return await db.pets.getAllPets();
};
