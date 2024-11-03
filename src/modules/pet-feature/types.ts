export type PetType = {
  id: string;
  name: string;
  breed: string;
  age: number;
};

export type PetDb = {
  pets: {
    deletePet: (id: string) => Promise<void>;
    create: (data: PetType) => Promise<void>;
    getAllPets: () => Promise<PetType[]>;
    getPetById: (id: string) => Promise<PetType>;
    updatePet: (id: string, data: Partial<PetType>) => Promise<void>;
  };
};
