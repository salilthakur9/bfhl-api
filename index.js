import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import healthRoutes from "./routes/health.routes.js";
import bfhlRoutes from "./routes/bfhl.routes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use("/health", healthRoutes);
app.use("/bfhl", bfhlRoutes);

app.get("/", (req, res) => {
  res.send("BFHL API running");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
