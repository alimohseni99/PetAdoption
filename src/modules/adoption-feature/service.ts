import { createAdoption } from "./create";
import { getAll } from "./get-all";
import { Db } from "./types";

export function AdoptionService(db: Db) {
  return {
    adopt: createAdoption(db),
    getAll: getAll(db),
  };
}
