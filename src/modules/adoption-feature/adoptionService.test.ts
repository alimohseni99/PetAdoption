import { AdoptionService } from "./service";
import { Db } from "./types";

jest.mock("uuid", () => ({
  v4: jest.fn(() => "mocked-uuid"),
}));

const db: Db = {
  adoption: {
    create: jest.fn().mockName("createMock"),
    getAllAdoptions: jest.fn().mockName("getAllMock"),
  },
};

const adoptionService = AdoptionService(db);

describe("AdoptionService", () => {
  it("should create an adoption", async () => {
    const input = { petId: "1", adopterName: "Daniel" };
    await adoptionService.adopt(input);

    expect(db.adoption.create).toHaveBeenCalledWith({
      id: "mocked-uuid",
      petId: "1",
      adopterName: "Daniel",
    });
  });
  it("should get all adoptions", async () => {
    await adoptionService.getAll();
    expect(db.adoption.getAllAdoptions).toHaveBeenCalled();
  });
});
