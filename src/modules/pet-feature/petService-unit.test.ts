import { PetService } from "./service";
import { PetDb } from "./types";

jest.mock("uuid", () => ({
  v4: jest.fn(() => "mocked-uuid"),
}));

const db: PetDb = {
  pets: {
    create: jest.fn().mockName("createMock"),
  },
};

const adoptionService = PetService(db);
