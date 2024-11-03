export type PetType = {
  id: string;
  name: string;
  breed: string;
  age: number;
};

export type PetDb = {
  pets: {
    create: (data: PetType) => Promise<void>;
    getAllPets: () => Promise<PetType[]>;
  };
};
