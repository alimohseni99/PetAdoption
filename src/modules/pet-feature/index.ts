import { createPetRouter } from "./route";
import { PetDb } from "./types";

export function createPetModule(db: PetDb) {
  return createPetRouter(db);
}
