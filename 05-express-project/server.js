const express = require("express");
const path = require("path");
const app = express();

const PORT = 3000;

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));

app.use((req, res, next) => {
  const start = Date.now();
  next();
  const delta = Date.now() - start;
  console.log(`${req.method} ${req.baseUrl}${req.url} ${delta}ms`);
});

app.use(express.json());
app.use("/", express.static(path.join(__dirname, "/public")));
app.get("/", (req, res) => {
  res.render("index", {
    title: "My friend are VERYY clever",
    caption: "Lets's go skiing!",
  });
});

app.use("/friends", require("./routes/friends.router"));
app.use("/messages", require("./routes/messages.router"));

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
