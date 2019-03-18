
// Import Path Module
var path = require("path");

// Routing
module.exports = function(app) {
    
    // GET Route to /survey
    app.get("/survey", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/survey.html"));
    });
  
    // GET Route if no matching route is found to default to home
    app.get("*", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/home.html"));
    });
  };
  