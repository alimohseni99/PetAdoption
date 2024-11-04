import { createAdoptionService } from "./service";
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

const adoptionService = createAdoptionService(db);

describe("AdoptionService", () => {
  it("should create an adoption", async () => {
    const input = { petId: "1", petName: "Bruno", adopterName: "Daniel" };
    await adoptionService.adopt(input);

    expect(db.adoption.create).toHaveBeenCalledWith({
      id: "mocked-uuid",
      petId: "1",
      petName: "Bruno",
      adopterName: "Daniel",
    });
  });
  it("should get all adoptions", async () => {
    await adoptionService.getAll();
    expect(db.adoption.getAllAdoptions).toHaveBeenCalled();
  });
  it("should get an adoption by id", async () => {
    await adoptionService.getAdoptionById({ id: "1" });
    expect(db.adoption.getAdoptionById).toHaveBeenCalledWith("1");
  });
  it("should update an adoption", async () => {
    const id = "1";
    const mockResult = { id: "1", adopterName: "Daniel" };
    (db.adoption.patchAdoption as jest.Mock).mockResolvedValue(mockResult);
    const result = await adoptionService.patchAdoption({ id }, mockResult);
    expect(result).toEqual(mockResult);
  });
  it("should delete an adoption", async () => {
    await adoptionService.deleteAdoption({ id: "1" });
    expect(db.adoption.deleteAdoption).toHaveBeenCalledWith("1");
  });
});
