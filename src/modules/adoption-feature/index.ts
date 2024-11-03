import { routerController } from "./route";
import { AdoptionService } from "./service";
import { Db } from "./types";

export function createAdoptionModule(db: Db) {
  const service = AdoptionService(db);
  const router = routerController(service);
  return {
    adopt: router,
    getAllAdoptions: router,
    getAdoptionById: router,
  };
}
