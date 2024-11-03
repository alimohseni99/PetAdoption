import { createAdoption } from "./create";
import { deleteAdoption } from "./delete";
import { getAdoptionById } from "./get";
import { getAllAdoptions } from "./get-all";
import { Db } from "./types";
import { updateAdoption } from "./update";

export function createAdoptionService(db: Db) {
  return {
    adopt: createAdoption(db),
    getAll: getAllAdoptions(db),
    getAdoptionById: getAdoptionById(db),
    deleteAdoption: deleteAdoption(db),
    patchAdoption: updateAdoption(db),
  };
}
