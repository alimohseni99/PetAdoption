import { Router } from "express";
import { AdoptionService } from "./service";

export function routerController(service: ReturnType<typeof AdoptionService>) {
  const router = Router();

  router.post("/", async (req, res) => {
    const { petId, adopterName } = req.body;
    const { id } = await service.adopt({ petId, adopterName });
    res.status(201).json({ id });
  });

  router.get("/", async (req, res) => {
    try {
      const adoptions = await service.getAll();
      res.json(adoptions);
    } catch (error) {
      console.log(error);
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
      console.log(error);
      res.status(500).send({ error: "Failed to delete adoption" });
    }
  });
  router.patch("/:id", async (req, res) => {
    try {
      await service.patchAdoption({ id: req.params.id }, req.body);
      const updatedAdoption = await service.getAdoptionById({
        id: req.params.id as string,
      });
      res.json(updatedAdoption);
    } catch (error) {
      console.log(error);
      res.status(500).send({ error: "Failed to update adoption" });
    }
  });
  return router;
}
