const express = require("express");
const cors = require("cors");
const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});

var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Shifty526",
    database: "plannerDB"
  });
  
  // Connect to the database
connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
    console.log("connected as id " + connection.threadId);
});

app.get("/api/all", cors(), (req, res) => {
    var dbQuery = "SELECT * FROM Notes";

    connection.query(dbQuery, function(err, result) {
      if (err) throw err;
      console.log(result)
      res.json(result);
    });
});
  