import express from "express";
import scanRoutes from "./api/routes/scan.routes";

const app = express();

app.use(express.json());

app.use("/api/v1", scanRoutes);

export default app;