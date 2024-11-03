import { Db } from "../types";

export const getAllAdoptions = (db: Db) => async () => {
  return db.adoption.getAllAdoptions();
};
