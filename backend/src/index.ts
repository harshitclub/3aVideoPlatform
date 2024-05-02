import express from "express";
import dotenv from "dotenv";
import helmet from "helmet";
import cors from "cors";
import cookieParser from "cookie-parser";
import rateLimit from "express-rate-limit";
import morgan from "morgan";
import userRouter from "./routes/userRoutes";

dotenv.config();
const app = express();

const PORT = process.env.PORT || 3001;

// Security middleware setup
app.use(helmet()); // Protect against common vulnerabilities
app.use(
  rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Limit requests to 100 per window
  })
); // Limit excessive requests

// Middleware setup
app.use(express.json({ limit: "16kb" })); // Parse JSON data with limit
app.use(express.urlencoded({ extended: true, limit: "16kb" })); // Parse URL-encoded data with limit
app.use(cookieParser());
app.use(cors());

app.use(
  //@ts-ignore
  process.env.NODE_ENV !== "production" ? morgan("dev") : null
); // Conditional logging

app.use("/api/v1/user", userRouter);

app.listen(PORT, () => {
  console.log(`Server started at ${PORT}`);
});
