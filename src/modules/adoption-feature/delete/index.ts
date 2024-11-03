import { Db } from "../types";

export const deleteAdoption = (db: Db) => async (input: { id: string }) => {
  try {
    await db.adoption.deteleAdoption(input.id);
  } catch (error) {
    throw new Error("Failed to delete adoption");
  }
};
