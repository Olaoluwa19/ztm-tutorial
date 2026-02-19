require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();
const morgan = require("morgan");

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(morgan("combined"));

app.use(express.json());
app.use(express.static(path.join(__dirname, "..", "/public")));

app.use("/planets", require("./routes/planets/planets.router"));
app.use("/launches", require("./routes/launches/launches.router"));

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});

module.exports = app;
