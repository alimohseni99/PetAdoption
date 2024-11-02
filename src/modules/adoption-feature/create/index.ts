type Db = {
  adoption: {
    create: (data: any) => Promise<void>;
  };
};

const createFactory = () => {
  return {};
};

const validateInput = (input: Input): void => {
  if (!input.petId || !input.adopterName) {
    throw new Error("Invalid input");
  }
};
