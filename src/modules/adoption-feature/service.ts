import { createAdoption } from "./create";
import { Db } from "./types";

export function serviceFacotry(db: Db) {
  return {
    createAdoption: createAdoption(db),
  };
}
