import { v4 } from "uuid";
import { PetDb } from "../types";
import { Input } from "./input";

export const createPetForAdoption = (db: PetDb) => async (input: Input) => {
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
