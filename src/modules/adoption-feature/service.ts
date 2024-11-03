import { createAdoption } from "./create";
import { getAllAdoptions } from "./get-all";
import { Db } from "./types";

export function AdoptionService(db: Db) {
  return {
    adopt: createAdoption(db),
    getAll: getAllAdoptions(db),
  };
}
