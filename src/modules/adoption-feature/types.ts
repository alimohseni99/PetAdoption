export type Db = {
  create: (data: any) => Promise<void>;
};

export type Input = {
  petId: string;
  adopterName: string;
};


