// var mysql = require("mysql");

// var connection = mysql.createConnection({
//     host: "localhost",
//     port: 3306,
//     user: "root",
//     password: "Shifty526",
//     database: "plannerDB"
//   });
  
//   // Connect to the database
//   connection.connect(function(err) {
//     if (err) {
//       console.error("error connecting: " + err.stack);
//       return;
//     }
//     console.log("connected as id " + connection.threadId);
//   });

//   app.get("/api/all", function(req, res) {
//     var dbQuery = "SELECT * FROM Notes";

//     connection.query(dbQuery, function(err, result) {
//       if (err) throw err;
//       res.json(result);
//     });
//   });
  
//   // Export connection
//   module.exports = connection;