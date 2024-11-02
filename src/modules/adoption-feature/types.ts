export type AdoptionData = {
  id: string;
  petId: string;
  adopterName: string;
};

export type Db = {
  create: (data: AdoptionData) => Promise<void>;
};

export type Input = {
  petId: string;
  adopterName: string;
};
