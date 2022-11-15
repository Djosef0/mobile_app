import express from "express";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.js";
const app = express();


app.use(express.json());
app.use(cookieParser());


app.use("/api/auth", authRoutes);

app.listen(8800,"192.168.2.210", () => {
  console.log("Connected!");
});