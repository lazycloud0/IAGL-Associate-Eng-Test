import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import todoRoutes from "./routes/todoRoutes.js";

dotenv.config();

const createServer = () => {
  const app = express();
  const PORT = process.env.PORT || 9091;

  // CORS configuration
  app.use(
    cors({
      origin: ["http://localhost:3000"],
      methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
      credentials: true,
      allowedHeaders: ["Content-Type"],
      optionsSuccessStatus: 200,
    })
  );

  app.options("*", cors());

  app.use(express.json());
  app.use("/api", todoRoutes);

  app.get("/", (req, res) => {
    res.send("Welcome to the Todo List API!");
  });

  // Error handling middleware
  app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: "An error occurred", error: err.message });
  });

  return app;
};

export default createServer;
