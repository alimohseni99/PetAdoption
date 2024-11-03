import { routerController } from "./route";
import { AdoptionService } from "./service";
import { Db } from "./types";

export function createAdoptionModule(db: Db) {
  const service = AdoptionService(db);
  return {
    adopt: routerController(service),
    getAllAdoptions: routerController(service),
  };
}
