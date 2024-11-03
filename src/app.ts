import express from "express";
import { createAdoptionModule } from "./modules";
import { createAdoptionDb } from "./modules/adoption-feature/create-db";
import { createPetModule } from "./modules/pet-feature";
import { createPetDb } from "./modules/pet-feature/create-db";

export function createApp() {
  const app = express();
  app.use(express.json());

  app.get("/", (req, res) => {
    res.send("Welcome to Pet Adoption!").status(200);
  });

  const adoptionModule = createAdoptionModule(createAdoptionDb());
  app.use("/adopt", adoptionModule);

  const petModule = createPetModule(createPetDb());
  app.use("/pets", petModule);

  return app;
}
