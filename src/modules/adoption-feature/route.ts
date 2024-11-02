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

  return router;
}
