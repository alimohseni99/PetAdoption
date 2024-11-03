import { createPetForAdoption } from "./create";
import { deletePet } from "./delete";
import { getAllPets } from "./get-all";
import { PetDb } from "./types";

export function PetService(db: PetDb) {
  return {
    addPet: createPetForAdoption(db),
    getAllPets: getAllPets(db),
    deletePet: deletePet(db),
  };
}
