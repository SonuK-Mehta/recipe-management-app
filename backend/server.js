// packages imports
dotenv.config();
import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import cors from "cors";
import morgan from "morgan";

const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Server Started</h1>");
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`.bgCyan.white);
});
