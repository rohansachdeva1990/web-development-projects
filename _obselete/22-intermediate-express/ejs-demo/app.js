var express = require("express");
var app = express();

//
app.use(express.static('public'));

// Express will expect to detect the files to be rendered as ejs.
app.set('view engine', 'ejs');

// Routes
app.get('/', function(req, res) {
  res.render('home');
});

app.get('/fallinlovewith/:thing', function(req, res) {
  var thing = req.params.thing;

  // In the template value of thingVar should be thing
  res.render('love', {
    thingVar: thing
  });
});


app.get("/posts", function(req, res) {
  var posts = [{
      title: "Post 1",
      author: "Susy"
    },
    {
      title: "My adoarable pet bunny",
      author: "Charlie"
    },
    {
      title: "Let's do it!!",
      author: "Rohan"
    }
  ];

  // Pretty commmon to use the same name
  res.render('posts', {
    posts: posts
  });
});

app.listen(3000, function() {
  console.log('Server started');
});
