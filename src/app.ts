import express from "express";
import { createAdoptionModule } from "./modules";
import { AdoptionData, Db } from "./modules/adoption-feature/types";
function createDb(): Db {
  const data: AdoptionData[] = [];
  return {
    adoption: {
      getAllAdoptions: async () => data,
      create: async (adoptionData: AdoptionData): Promise<void> => {
        data.push(adoptionData);
      },
      getAdoptionById: async (id: string): Promise<AdoptionData> => {
        const adoption = data.find((adoption) => adoption.id === id);
        if (!adoption) {
          throw new Error(`Adoption with id ${id} not found`);
        }
        return adoption;
      },
      deleteAdoption: async (id: string): Promise<void> => {
        const index = data.findIndex((adoption) => adoption.id === id);
        if (index === -1) {
          throw new Error(`Adoption with id ${id} not found`);
        }
        data.splice(index, 1);
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
  app.use("/get", adoptionModule.getAdoptionById);
  app.use("/delete", adoptionModule.deleteAdoption);

  return app;
}
