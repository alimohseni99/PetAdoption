import { AdoptionData, Db } from "../types";
import { Input } from "./input";

export const patchAdoption =
  (db: Db) => async (input: Input, data: Partial<AdoptionData>) => {
    return await db.adoption.patchAdoption(input.id, data);
  };
