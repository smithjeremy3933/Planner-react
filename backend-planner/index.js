const express = require("express");
const cors = require("cors");
const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


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


//Note/GroceryList
app.get("/api/all", cors(), (req, res) => {
    var dbQuery = "SELECT * FROM Notes";

    connection.query(dbQuery, function(err, result) {
      if (err) throw err;
      console.log(result)
      res.json(result);
    });
});

app.post("/api/new", cors(), function(req, res) {
  console.log(req.body);
  var dbQuery = "INSERT INTO Notes (note) VALUES (?)";

   connection.query(dbQuery, [req.body.note], function(err, result) {
     if (err) throw err;
     console.log("Note Successfully Saved!");
     res.end();
   });
});

app.post("/api/delete", cors(), function(req, res){
  console.log(req.body);
  var dbQuery = "DELETE FROM Notes WHERE id=(?)";
  connection.query(dbQuery, [req.body.id], function(err, result) {
    if (err) throw err;
    console.log("Note Successfully !");
    res.end();
  });
})


//Quotes
app.get("/api/quotes/all", cors(), (req, res) => {
  var dbQuery = "SELECT * FROM Quotes";

  connection.query(dbQuery, function(err, result) {
    if (err) throw err;
    console.log(result)
    res.json(result);
  });
});


//todos
app.get("/api/todos/all", cors(), (req, res) => {
  var dbQuery = "SELECT * FROM todos";

  connection.query(dbQuery, function(err, result) {
    if (err) throw err;
    console.log(result)
    res.json(result);
  });
});


app.post("/api/todos/new", cors(), function(req, res) {
  console.log(req.body);
  var dbQuery = "INSERT INTO todos (todo_note, todos_time) VALUES (?,?)";
   connection.query(dbQuery, [req.body.todo_note, req.body.todos_time], function(err, result) {
     if (err) throw err;
     console.log("Note Successfully Saved!");
     res.end();
   });
});

app.post("/api/todos/delete", cors(), function(req, res){
  console.log(req.body);
  var dbQuery = "DELETE FROM todos WHERE id=(?)";
  connection.query(dbQuery, [req.body.id], function(err, result) {
    if (err) throw err;
    console.log("Note Successfully Deleted!");
    res.end();
  });
})
