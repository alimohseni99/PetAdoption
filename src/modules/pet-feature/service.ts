import { createPetForAdoption } from "./create";
import { deletePet } from "./delete";
import { getPetById } from "./get";
import { getAllPets } from "./get-all";
import { PetDb } from "./types";
import { updatePet } from "./update";

export function PetService(db: PetDb) {
  return {
    addPet: createPetForAdoption(db),
    getAllPets: getAllPets(db),
    deletePet: deletePet(db),
    getPetById: getPetById(db),
    updatePet: updatePet(db),
  };
}
