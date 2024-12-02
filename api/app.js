import express from "express";
import postRouter from "./routes/post.route.js";
import authRouter from "./routes/auth.route.js";
import cookieParser from "cookie-parser";

const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());

// Middleware to parse cookies
app.use(cookieParser());

// Use routes
app.use("/api/posts", postRouter);
app.use("/api/auth", authRouter);

app.listen(8000, () => {
  console.log("Server is running on port 8000");
});
