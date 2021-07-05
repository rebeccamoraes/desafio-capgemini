import express from "express";

import { advertisementsRoutes } from "./routes/advertisements.routes";

const app = express();

app.use(express.json());

app.use(advertisementsRoutes);

app.listen(3333, () => console.log("Server is running."));
