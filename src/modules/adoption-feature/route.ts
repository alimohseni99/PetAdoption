import { Router } from "express";
import { createAdoptionService } from "./service";
import { Db } from "./types";

export function createAdoptionRoute(db: Db) {
  const service = createAdoptionService(db);
  const router = Router();

  router.post("/", async (req, res) => {
    const { petId, adopterName, petName } = req.body;
    const adoption = await service.adopt({ petId, petName, adopterName });
    res.status(201).json(adoption);
  });

  router.get("/", async (req, res) => {
    try {
      const adoptions = await service.getAll();
      res.json(adoptions);
    } catch (error) {
      res.status(500).send({ error: "Failed to fetch adoptions" });
    }
  });

  router.get("/:id", async (req, res) => {
    const adoption = await service.getAdoptionById({
      id: req.params.id as string,
    });
    if (!adoption) {
      res.status(404).send({ error: "Adoption not found" });
      return;
    }
    res.json(adoption);
  });

  router.delete("/:id", async (req, res) => {
    try {
      await service.deleteAdoption({
        id: req.params.id as string,
      });
      res.status(204).send();
    } catch (error) {
      res.status(500).send({ error: "Failed to delete adoption" });
    }
  });
  router.patch("/:id", async (req, res) => {
    try {
      const updatedAdoption = await service.patchAdoption(
        { id: req.params.id },
        req.body
      );
      res.json(updatedAdoption);
    } catch (error) {
      console.log(error);
      res.status(500).send({ error: "Failed to update adoption" });
    }
  });
  return router;
}
