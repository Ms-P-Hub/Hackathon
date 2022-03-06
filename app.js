const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();

app.use("/static", express.static(__dirname));
app.use(bodyParser.urlencoded({ extended: true }));

//app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

/*app.get("/loginUser", (req, res) => {
  res.send("New Visitor Added!!!");
});*/

const port = 3000;
app.listen(port, () =>
  console.log(`Server running at http://localhost:${port}`)
);
