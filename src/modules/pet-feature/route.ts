import { Router } from "express";
import { PetService } from "./service";

export function routerController(service: ReturnType<typeof PetService>) {
  const router = Router();

  router.post("/", async (req, res) => {
    const { id, name, breed, age } = req.body;
    const pet = await service.addPet({ id, name, breed, age });
    res.status(201).send(pet);
  });
  return router;
}
