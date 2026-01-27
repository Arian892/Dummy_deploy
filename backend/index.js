const express = require("express");
const cors = require("cors");
const { Pool } = require("pg");

const app = express();
app.use(cors());
app.use(express.json());

const pool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

app.get("/health", (req, res) => {
  res.send("Backend healthy");
});

app.get("/data", async (req, res) => {
  const result = await pool.query("SELECT * FROM items");
  res.json(result.rows);
});

app.listen(5000, () => {
  console.log("Backend running on port 5000");
});
