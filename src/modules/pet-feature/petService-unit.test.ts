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
    await petService.deletePet("1");
    expect(db.pets.deletePet).toHaveBeenCalled();
  });
  it("should get a pet by id", async () => {
    await petService.getPetById("1");
    expect(db.pets.getPetById).toHaveBeenCalled();
  });
});
