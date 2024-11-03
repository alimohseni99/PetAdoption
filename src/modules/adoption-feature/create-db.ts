import { AdoptionData, Db } from "./types";

export function createAdoptionDb(): Db {
  const data: AdoptionData[] = [];

  return {
    adoption: {
      getAllAdoptions: async () => data,
      create: async (adoptionData: AdoptionData): Promise<AdoptionData> => {
        data.push(adoptionData);
        return adoptionData;
      },

      getAdoptionById: async (
        id: string
      ): Promise<AdoptionData | undefined> => {
        const adoption = data.find((adoption) => adoption.id === id);
        return adoption || undefined;
      },

      deleteAdoption: async (id: string): Promise<void> => {
        const index = data.findIndex((adoption) => adoption.id === id);
        if (index !== -1) {
          data.splice(index, 1);
        }
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
