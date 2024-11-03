import { v4 } from "uuid";
import { Db } from "../types";
import { Input } from "./input";
export const createAdoption = (db: Db) => async (input: Input) => {
  const id = v4();
  const adoptionData = {
    ...input,
    id: id,
  };

  try {
    await db.adoption.create(adoptionData);
  } catch (error) {
    throw new Error("Failed to craete adoption");
  }
  return adoptionData;
};
