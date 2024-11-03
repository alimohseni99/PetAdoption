import request from "supertest";
import { createApp } from "../../app";

jest.mock("uuid", () => ({
  v4: jest.fn(() => "mocked-uuid"),
}));

describe.only("AdoptionService Integration Tests", () => {
  const app = createApp();

  beforeEach(async () => {
    jest.clearAllMocks();
  });

  it("Should create an adoption", async () => {
    const input = { petId: "1", adopterName: "Daniel" };
    const response = await request(app).post("/adopt").send(input).expect(201);
    expect(response.body).toEqual({
      id: "mocked-uuid",
      petId: "1",
      adopterName: "Daniel",
    });
  });
  it("Should get all adoptions", async () => {
    const mockAdoptions = [
      {
        id: "mocked-uuid",
        petId: "1",
        adopterName: "Daniel",
      },
    ];
    const response = await request(app).get("/getall").expect(200);
    expect(response.body).toEqual(mockAdoptions);
  });

  it.skip("Should return an adoption by id", async () => {
    const mockAdoption = {
      id: "mocked-uuid",
      petId: "1",
      adopterName: "Daniel",
    };
    const res = await request(app).get("/get/mocked-uuid").expect(200);
    expect(res.body).toEqual(mockAdoption);
  });

  it("Should delete an adoption by id", async () => {
    const res = await request(app).delete("/delete/mocked-uuid").expect(204);

    expect(res.body).toEqual({});
  });
});
