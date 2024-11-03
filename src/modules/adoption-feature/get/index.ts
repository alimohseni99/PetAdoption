import { Db } from "../types";
import { Input } from "./input";

export const getAdoptionById = (db: Db) => async (input: Input) => {
  return await db.adoption.getAdoptionById(input.id);
};
