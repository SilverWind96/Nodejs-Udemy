const express = require("express");

const feedRoutes = require("./routes/feed");

const sequelize = require("./util/database");

const app = express();

// app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/feed", feedRoutes);

sequelize
  .sync()
  .then((rs) => {
    console.log(rs);
    app.listen(8080);
  })
  .catch((err) => console.log(err));
