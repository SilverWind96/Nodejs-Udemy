const express = require("express");

const feedRoutes = require("./routes/feed");

const db = require("./util/database");

const app = express();

db.execute("SELECT * FROM `node-complete`.products;")
  .then((e) => console.log(e))
  .catch((err) => console.log("err " + err));

// app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/feed", feedRoutes);

app.listen(8080);
