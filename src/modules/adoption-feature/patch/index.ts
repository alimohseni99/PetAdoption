import { AdoptionData, Db } from "../types";

export const patchAdoption =
  (db: Db) => async (input: string, data: Partial<AdoptionData>) => {
    return await db.adoption.patchAdoption(input, data);
  };
