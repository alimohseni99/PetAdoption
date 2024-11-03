import { AdoptionService } from "./service";
import { Db } from "./types";


jest.mock("uuid", () => ({
  v4: jest.fn(() => "mocked-uuid"),
}));

const db: Db = {
  adoption: {
    create: jest.fn().mockName("createMock"),
    getAllAdoptions: jest.fn().mockName("getAllMock"),
    getAdoptionById: jest.fn().mockName("getByIdMock"),
    deleteAdoption: jest.fn().mockName("deleteMock"),
    patchAdoption: jest.fn().mockName("updateMock"),
  },
};
