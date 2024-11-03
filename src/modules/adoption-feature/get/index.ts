import { Db } from "../types";

export const getAdoptionById = (db: Db) => async (id: string) => {
  return await db.adoption.getAdoptionById(id);
};
