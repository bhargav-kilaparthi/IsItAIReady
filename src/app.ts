import express from "express";
import scanRoutes from "./api/routes/scan.routes";
import healthRoutes from "./api/routes/health.routes";

const app = express();

app.use(express.json());

app.use("/api/v1", scanRoutes);
app.use("/api/v1", healthRoutes);

export default app;