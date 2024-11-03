export type AdoptionData = {
  id: string;
  petId: string;
  adopterName: string;
};

export type Db = {
  adoption: {
    create: (data: AdoptionData) => Promise<void>;
    getAllAdoptions: () => Promise<AdoptionData[]>;
    getAdoptionById: (id: string) => Promise<AdoptionData>;
  };
};
