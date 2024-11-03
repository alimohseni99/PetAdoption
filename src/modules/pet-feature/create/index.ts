import { v4 } from "uuid";
import { PetDb, PetType } from "../types";

export const createPetForAdoption = (db: PetDb) => async (input: PetType) => {
  const id = v4();
  const petData = {
    ...input,
    id: id,
  };

  try {
    await db.pets.create(petData);
  } catch (error) {
    throw new Error("Failed to add pet for adoption");
  }
  return petData;
};
