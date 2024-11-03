import { createAdoptionRoute } from "./route";
import { Db } from "./types";

export function createAdoptionModule(db: Db) {
  return createAdoptionRoute(db);
}
