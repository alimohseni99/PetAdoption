export type AdoptionData = {
  id: string;
  petId: string;
  adopterName: string;
};

export type Db = {
  adoption: {
    create: (data: AdoptionData) => Promise<void>;
    getAllAdoptions: () => Promise<AdoptionData[]>;
    getAdoptionById: (id: string) => Promise<AdoptionData | undefined>;
    deleteAdoption: (id: string) => Promise<void>;
    patchAdoption: (
      id: string,
      data: Partial<AdoptionData>
    ) => Promise<AdoptionData>;
  };
};
