import { Db } from "../types";

export const deleteAdoption = (db: Db) => async (input: string) => {
  await db.adoption.deleteAdoption(input);
};
