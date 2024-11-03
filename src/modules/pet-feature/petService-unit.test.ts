import { PetService } from "./service";
import { PetDb } from "./types";

jest.mock("uuid", () => ({
  v4: jest.fn(() => "mocked-uuid"),
}));

const db: PetDb = {
  pets: {
    create: jest.fn().mockName("createMock"),
    getAllPets: jest.fn().mockName("getAllMock"),
    deletePet: jest.fn().mockName("deleteMock"),
    getPetById: jest.fn().mockName("getByIdMock"),
    updatePet: jest.fn().mockName("updateMock"),
  },
};

const petService = PetService(db);

describe("PetService", () => {
  it("should create an pet", async () => {
    const input = { id: "1", name: "Daniel", breed: "Cavalier", age: 3 };
    await petService.addPet(input);

    expect(db.pets.create).toHaveBeenCalledWith({
      id: "mocked-uuid",
      name: "Daniel",
      breed: "Cavalier",
      age: 3,
    });
  });
  it("should get all available pets", async () => {
    await petService.getAllPets();
    expect(db.pets.getAllPets).toHaveBeenCalled();
  });
  it("should delete a pet", async () => {
    await petService.deletePet({ id: "1" });
    expect(db.pets.deletePet).toHaveBeenCalled();
  });
  it("should get a pet by id", async () => {
    await petService.getPetById({ id: "1" });
    expect(db.pets.getPetById).toHaveBeenCalled();
  });
  it("should update a pet", async () => {
    const id = "1";
    const mockResult = {
      id: "mocked-uuid",
      name: "Bruno",
      breed: "Husky",
      age: 4,
    };
    (db.pets.updatePet as jest.Mock).mockResolvedValue(mockResult);
    const result = await petService.updatePet(id, mockResult);
    expect(result).toEqual(mockResult);
  });
});
