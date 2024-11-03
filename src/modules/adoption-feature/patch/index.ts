import { Db } from "../types";

export const patchAdoption = (db: Db) => async (input: string) => {
  return await db.adoption.patchAdoption(input);
};
