import { deepEqual } from "node:assert/strict";
import request from "supertest";
import { createApp } from "./app";

describe("GET /", () => {
  it("should return status 200", async () => {
    const app = createApp();
    const response = await request(app).get("/");
    deepEqual(response.status, 200);
  });
});
