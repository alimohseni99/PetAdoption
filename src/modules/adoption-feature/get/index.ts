import { Db } from "../types";

export const getAdoptionById = (db: Db) => async (id: string) => {
  return db.adoption.getAdoptionById(id);
};
