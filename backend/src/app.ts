import "dotenv/config";
import express from "express";
import cors from "cors";
import weatherRouter from "./routes/weather.routes.js";

const app = express();

const frontendOrigin = process.env.FRONTEND_ORIGIN;

if (!frontendOrigin) {
    throw new Error("FRONTEND_ORIGIN is missing from environment variables");
}

// Middleware
app.use(
    cors({
        origin: frontendOrigin,
        methods: ["GET"],
    })
);

app.use(express.json());

// Routes

app.use("/api/weather", weatherRouter);

app.get("/api/test", (req, res) => {
  res.json({
    message: "Portfolio backend is working!",
  });
});

// Server
const PORT = Number(

    process.env.PORT ??
    process.env.BACKEND_PORT ??
    3000

);



if (Number.isNaN(PORT)) {

  throw new Error("PORT must be a valid number");

}

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
});