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
      res.status(404).send({ error: "Pets not found" });
      return;
    }
  });

  return router;
}
