import express from "express";
import { createAdoptionModule } from "./modules";
import { AdoptionData, Db } from "./modules/adoption-feature/types";
import { createPetModule } from "./modules/pet-feature";
import { PetDb, PetType } from "./modules/pet-feature/types";
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
      patchAdoption: async (
        id: string,
        adoptionData: Partial<AdoptionData>
      ): Promise<AdoptionData> => {
        const index = data.findIndex((adoption) => adoption.id === id);
        if (index === -1) {
          throw new Error(`Adoption with id ${id} not found`);
        }
        data[index] = { ...data[index], ...adoptionData };
        return data[index];
      },
    },
  };
}

function createPetDb(): PetDb {
  const data: PetType[] = [];
  return {
    pets: {
      getAllPets: async () => data,
      create: async (PetInfo: PetType): Promise<PetType> => {
        data.push(PetInfo);
        return PetInfo;
      },
      deletePet: async (id: string): Promise<void> => {
        const index = data.findIndex((pet) => pet.id === id);
        if (index === -1) {
          throw new Error(`Pet with id ${id} not found`);
        }
        data.splice(index, 1);
      },
      getPetById: async (id: string): Promise<PetType> => {
        const pet = data.find((pet) => pet.id === id);
        if (!pet) {
          throw new Error(`pet with id ${id} not found`);
        }
        return pet;
      },
      updatePet: async (
        id: string,
        petData: Partial<PetType>
      ): Promise<PetType> => {
        const index = data.findIndex((pet) => pet.id === id);

        if (index === -1) {
          throw new Error(`pet with id ${id} not found`);
        }
        data[index] = { ...data[index], ...petData };
        return data[index];
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
  app.use("/update", adoptionModule.patchAdoption);

  const petModule = createPetModule(createPetDb());
  app.use("/addPet", petModule.addPet);
  app.use("/getallpets", petModule.getAll);
  app.use("/deletepet", petModule.deletePet);
  app.use("/getpet", petModule.getPetById);
  app.use("/updatepet", petModule.updatePet);
  return app;
}
