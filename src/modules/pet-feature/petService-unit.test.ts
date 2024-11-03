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

describe.only("PetService", () => {
  it("should create an pet", async () => {
    const input = { id: "1", name: "Daniel", breed: "Cavalier", age: 3 };
    await adoptionService.addPet(input);

    expect(db.pets.create).toHaveBeenCalledWith({
      id: "mocked-uuid",
      name: "Daniel",
      breed: "Cavalier",
      age: 3,
    });
  });
});
