import { routerController } from "./route";
import { PetService } from "./service";
import { PetDb } from "./types";

export function createPetModule(db: PetDb) {
  const service = PetService(db);
  const router = routerController(service);

  return {
    addPet: router,
    getAll: router,
    deletePet: router,
  };
}
