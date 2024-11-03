import request from "supertest";
import { createApp } from "../../app";
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

describe.only("AdoptionService Integration Tests", () => {
  const app = createApp();

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
});
