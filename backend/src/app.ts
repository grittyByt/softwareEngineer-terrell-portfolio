import "dotenv/config";
import express from "express";
import cors from "cors";
import weatherRouter from "./routes/weather.routes.js";

const app = express();

const frontendOrigin = process.env.FRONTEND_ORIGIN;

if (!frontendOrigin) {
    throw new Error("FRONTEND_ORIGIN is missing from environment variables");
}

app.use(

    cors({
        origin: frontendOrigin,
        methods: ["GET"],
    })
);

const port = process.env.BACKEND_PORT;
console.log("PORT value:", JSON.stringify(port));

if (!port) {
  throw new Error("PORT is missing from .env");
}

const portNumber = Number(port);

if (Number.isNaN(portNumber)) {
  throw new Error("PORT must be a valid number");
}

app.use(express.json());

app.use("/api/weather", weatherRouter);

app.get("/api/test", (req, res) => {
  res.json({
    message: "Portfolio backend is working!",
  });
});

app.listen(portNumber, "127.0.0.1", () => {
  console.log(`Server running at http://127.0.0.1:${portNumber}`);
});