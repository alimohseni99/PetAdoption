import express from "express";
import { createAdoptionModule } from "./modules";
import { AdoptionData, Db } from "./modules/adoption-feature/types";
function createDb(): Db {
  const data: AdoptionData[] = [];
  return {
    create: async (adoptionData) => {
      data.push(adoptionData);
    },
  };
}
export function createApp() {
  const app = express();
  app.use(express.json());
  app.get("/", (req, res) => {
    res.send("Welcome to Pet Adoption!").status(200);
  });

  const adoptionModule = createAdoptionModule(createDb());
  app.use("/adopt", adoptionModule.adopt);

  return app;
}
