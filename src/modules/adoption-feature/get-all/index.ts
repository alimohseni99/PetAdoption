import { Db } from "../types";

export const getAll = (db: Db) => async () => {
  return db.adoption.getAll();
};
