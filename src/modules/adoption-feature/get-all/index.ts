import { Db } from "../types";

export const getAllAdoptions = (db: Db) => async () => {
  return await db.adoption.getAllAdoptions();
};
