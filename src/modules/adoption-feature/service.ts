import { createAdoption } from "./create";
import { deleteAdoption } from "./delete";
import { getAdoptionById } from "./get";
import { getAllAdoptions } from "./get-all";
import { patchAdoption } from "./patch";
import { Db } from "./types";

export function AdoptionService(db: Db) {
  return {
    adopt: createAdoption(db),
    getAll: getAllAdoptions(db),
    getAdoptionById: getAdoptionById(db),
    deleteAdoption: deleteAdoption(db),
    patchAdoption: patchAdoption(db),
  };
}
