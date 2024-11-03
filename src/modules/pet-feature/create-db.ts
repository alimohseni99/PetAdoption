import { PetDb, PetType } from "./types";

export function createPetDb(): PetDb {
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
