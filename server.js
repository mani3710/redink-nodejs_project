const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./app/models");
const BlogPost = require("./app/controllers/blogPost.controller");
db.sequelize.sync();

//router
app.post("/", BlogPost.create);
app.get("/getAll", BlogPost.findAll);
app.get("/:id", BlogPost.findOne);
app.delete("/:id", BlogPost.delete);
app.put("/:id",BlogPost.update)

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
