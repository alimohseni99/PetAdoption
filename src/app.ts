import express from "express";
import { createAdoptionModule } from "./modules";
import { AdoptionData, Db } from "./modules/adoption-feature/types";
function createDb(): Db {
  const data: AdoptionData[] = [];
  return {
    adoption: {
      getAllAdoptions: async () => data,
      create: async (adoptionData) => {
        data.push(adoptionData);
      },
      getAdoptionById: async (id) => {
        return data.find((adoption) => adoption.id === id);
      },
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
  app.use("/getall", adoptionModule.getAllAdoptions);

  return app;
}
