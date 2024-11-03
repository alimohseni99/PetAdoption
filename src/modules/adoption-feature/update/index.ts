import { AdoptionData, Db } from "../types";
import { Input } from "./input";

export const updateAdoption =
  (db: Db) => async (input: Input, data: Partial<AdoptionData>) => {
    return await db.adoption.patchAdoption(input.id, data);
  };
