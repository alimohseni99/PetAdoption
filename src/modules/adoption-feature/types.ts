export type AdoptionData = {
  id: string;
  petId: string;
  adopterName: string;
};

export type Db = {
  create: (data: AdoptionData) => Promise<void>;
};
