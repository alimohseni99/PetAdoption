import { AdoptionService } from "./service";
import { Db } from "./types";

jest.mock("uuid", () => ({
  v4: jest.fn(() => "mocked-uuid"),
}));

const db: Db = {
  create: jest.fn(),
};

const adoptionService = AdoptionService(db);

describe("AdoptionService", () => {
  it("should create an adoption", async () => {
    const input = { petId: "1", adopterName: "Daniel" };
    await adoptionService.adopt(input);

    expect(db.create).toHaveBeenCalledWith({
      id: "mocked-uuid",
      petId: "1",
      adopterName: "Daniel",
    });
  });
});
