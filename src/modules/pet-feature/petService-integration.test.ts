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
});
