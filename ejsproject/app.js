var express = require("express");
var app = express();

app.get("/", function(req, res){
  var recipes = ["Raclette", "Seche a la placha", "Quenelle" ];
  res.render("homepage.ejs", {recipes: recipes}); 
});

app.listen(3000, function() {
  console.log("server is running on port 3000");
});
