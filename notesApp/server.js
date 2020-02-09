var express = require("express");
var path = require("path");

var cors = require("cors");

var http = require("http");

var app = express();

app.use(cors());

const forceSSL = function() {
  return function(req, res, next) {
    if (req.headers["x-forwarded-proto"] !== "https") {
      return res.redirect(["https://", req.get("Host"), req.url].join(""));
    }
    next();
  };
};
// Instruct the app
// to use the forceSSL
// middleware
app.use(forceSSL());

//open app
app.use(express.static(path.join(__dirname, "/dist/notesApp")));

app.use(express.static(path.join(__dirname, "app")));

//others
app.all("*", function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

app.get("*", function(req, res) {
  res.sendFile(__dirname + "/dist/notesApp/index.html");
});
const PORT = process.env.PORT || 8080;
app.listen(PORT, function() {
  console.log("Express server listening on port", PORT);
});
