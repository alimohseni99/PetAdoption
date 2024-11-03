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
  },
};

const adoptionService = AdoptionService(db);

describe("AdoptionService", () => {
  it.only("should create an adoption", async () => {
    const input = { petId: "1", adopterName: "Daniel" };
    await adoptionService.adopt(input);

    expect(db.adoption.create).toHaveBeenCalledWith({
      id: "mocked-uuid",
      petId: { id: "1" },
      adopterName: "Daniel",
    });
  });
  it("should get all adoptions", async () => {
    await adoptionService.getAll();
    expect(db.adoption.getAllAdoptions).toHaveBeenCalled();
  });
  it("should get an adoption by id", async () => {
    await adoptionService.getAdoptionById({ id: "1" });
    expect(db.adoption.getAdoptionById).toHaveBeenCalledWith({ id: "1" });
  });
});
