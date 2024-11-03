import request from "supertest";
import { createApp } from "../../app";

jest.mock("uuid", () => ({
  v4: jest.fn(() => "mocked-uuid"),
}));

describe("PetService Integration Tests", () => {
  const app = createApp();

  beforeEach(async () => {
    jest.clearAllMocks();
  });

  it("Should create an pet and status 201", async () => {
    const input = { id: "1", name: "Daniel", breed: "Cavalier", age: 3 };
    const response = await request(app).post("/addpet").send(input).expect(201);
    expect(response.body).toEqual({
      id: "mocked-uuid",
      name: "Daniel",
      breed: "Cavalier",
      age: 3,
    });
  });
  it("Should get all pets", async () => {
    const mockPets = [
      { id: "mocked-uuid", name: "Daniel", breed: "Cavalier", age: 3 },
    ];

    const respone = await request(app).get("/getallpets").expect(200);
    expect(respone.body).toEqual(mockPets);
  });

  it.skip("Should return a pet by id ", async () => {
    const mockPet = {
      id: "mocked-uuid",
      name: "Daniel",
      breed: "Cavalier",
      age: 3,
    };
    const respone = await request(app).get("/getpet/mocked-uuid").expect(200);
    expect(respone.body).toEqual(mockPet);
  });

  it("Should update a pet by id", async () => {
    const mockPet = {
      id: "mocked-uuid",
      name: "Daniel",
      breed: "Cavalier",
      age: 3,
    };

    const respone = await request(app)
      .patch("/updatepet/mocked-uuid")
      .expect(200);

    expect(respone.body).toEqual(mockPet);
  });
  it("Should delete a pet", async () => {
    const respone = await request(app)
      .delete("/deletepet/mocked-uuid")
      .expect(204);
    expect(respone.body).toEqual({});
  });
});
