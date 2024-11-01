import { deepEqual } from "node:assert/strict";
import test from "node:test";
import request from "supertest";
import { createApp } from "./app";

test("GET /", async () => {
  const app = createApp();
  const response = await request(app).get("/");
  deepEqual(response.status, 200);
});
