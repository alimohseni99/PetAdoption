import { createAdoption } from "./create";
import { Db } from "./types";

export function AdoptionService(db: Db) {
  return {
    adopt: createAdoption(db),
  };
}
