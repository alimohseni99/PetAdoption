import { Db } from "../types";
import { Input } from "./input";

export const deleteAdoption = (db: Db) => async (input: Input) => {
  await db.adoption.deleteAdoption(input.id);
};
