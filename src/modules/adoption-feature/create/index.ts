import { v4 } from "uuid";
import { Db, Input } from "../types";
export const createAdoption = (db: Db) => async (input: Input) => {
  const id = v4();
  const adoptionData = {
    id,
    petId: input.petId,
    adopterName: input.adopterName,
  };

  try {
    await db.create(adoptionData);
  } catch (error) {
    throw new Error("Failede to craete adoption");
  }
  return { id };
};
