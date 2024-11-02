export type AdoptionData = {
  id: string;
  petId: string;
  adopterName: string;
};

export type Db = {
  adoption: {
    create: (data: AdoptionData) => Promise<void>;
    getAll: () => Promise<AdoptionData[]>;
  };
};
