import { Router } from "express";
import { PetService } from "./service";

export function routerController(service: ReturnType<typeof PetService>) {
  const router = Router();

  router.post("/", async (req, res) => {
    const { id, name, breed, age } = req.body;
    const pet = await service.addPet({ id, name, breed, age });
    res.status(201).send(pet);
  });

  router.get("/", async (req, res) => {
    try {
      const pets = await service.getAllPets();
      res.json(pets);
    } catch (error) {
      res.status(500).send({ error: "Failed to fetch pets" });
    }
  });
  router.get("/:id", async (req, res) => {
    const pet = await service.getPetById(req.params.id as string);
    if (!pet) {
      res.status(404).send({ error: "Adoption not found" });
      return;
    }
    res.json(pet);
  });

  router.delete("/:id", async (req, res) => {
    try {
      await service.deletePet({ id: req.params.id as string });
      res.status(204).send();
    } catch (error) {
      res.status(500).send({ error: "failed to delete the pet" });
    }
  });

  router.patch("/:id", async (req, res) => {
    try {
      const updatedPet = await service.updatePet(req.params.id, req.body);
      res.status(200).json(updatedPet);
    } catch (error) {
      res.status(500).send({ error: "failed to update pet" });
    }
  });

  return router;
}
