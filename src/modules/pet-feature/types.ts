export type PetType = {
  id: string;
  name: string;
  breed: string;
  age: number;
};

export type PetDb = {
  pets: {
    create: (data: PetType) => Promise<PetType>;
    getAllPets: () => Promise<PetType[]>;
    deletePet: (id: string) => Promise<void>;
    getPetById: (id: string) => Promise<PetType>;
    updatePet: (id: string, data: Partial<PetType>) => Promise<PetType>;
  };
};
