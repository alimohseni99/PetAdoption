import { createPetService } from "./service";
import { PetDb, PetType } from "./types";

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

const petService = createPetService(db);

describe("PetService", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
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
    const mockPets: PetType[] = [
      { id: "1", name: "Daniel", breed: "Cavalier", age: 3 },
      { id: "2", name: "Bruno", breed: "Husky", age: 4 },
    ];
    (db.pets.getAllPets as jest.Mock).mockResolvedValue(mockPets);

    const result = await petService.getAllPets();

    expect(result).toEqual(mockPets);
    expect(db.pets.getAllPets).toHaveBeenCalled();
  });
  it("should delete a pet", async () => {
    await petService.deletePet({ id: "1" });
    expect(db.pets.deletePet).toHaveBeenCalled();
  });
  it("should get a pet by id", async () => {
    const id = "1";
    const mockPet = { id, name: "Daniel", breed: "Cavalier", age: 3 };
    (db.pets.getPetById as jest.Mock).mockResolvedValue(mockPet);

    const result = await petService.getPetById({ id: "1" });

    expect(result).toEqual(mockPet);
    expect(db.pets.getPetById).toHaveBeenCalledWith(id);
  });
  it("should update a pet", async () => {
    const id = { id: "1" };
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
  it("should get a pet by id with different inputs", async () => {
    const id1 = { id: "1" };
    const id2 = { id: "2" };
    const mockPet1 = { id: id1, name: "Daniel", breed: "Cavalier", age: 3 };
    const mockPet2 = { id: id2, name: "Bruno", breed: "Husky", age: 4 };
    (db.pets.getPetById as jest.Mock)
      .mockResolvedValueOnce(mockPet1)
      .mockResolvedValueOnce(mockPet2);

    const result1 = await petService.getPetById(id1);
    const result2 = await petService.getPetById(id2);

    expect(result1).toEqual(mockPet1);
    expect(result2).toEqual(mockPet2);
  });
});
