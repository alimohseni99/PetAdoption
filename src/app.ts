import express from "express";
import { createAdoptionModule } from "./modules";
import { Db } from "./modules/adoption-feature/types";
function createDb(): Db {
  const data: Cake[] = [];
  return {};
}
export function createApp() {
  const app = express();
  app.use(express.json());
  app.use(express.Router());
  app.get("/", (req, res) => {
    res.send("Welcome to Pet Adoption!").status(200);
  });

  const adoptionModule = createAdoptionModule(db);
  app.use("/adoption", adoptionModule.adopt);

  return app;
}
