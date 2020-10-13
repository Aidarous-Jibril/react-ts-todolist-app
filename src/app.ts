import express, { Express } from "express";
import cors from "cors";
import todoRoutes from "./routes/index";
require("./config/db");

const app: Express = express();

const PORT: string | number = process.env.PORT || 4000;

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// Enable CORS
app.use(cors());

app.use(todoRoutes);

// Start server
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
