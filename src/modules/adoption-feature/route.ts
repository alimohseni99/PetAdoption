import { Router } from "express";
import { AdoptionService } from "./service";

export function routerController(service: ReturnType<typeof AdoptionService>) {
  const router = Router();

  router.post("/", async (req, res) => {
    const { petId, adopterName } = req.body;
    const { id } = await service.adopt({ petId, adopterName });
    res.status(201).json({ id });
  });

  return router;
}
