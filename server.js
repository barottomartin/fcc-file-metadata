var express = require('express');
var app = express();
var multer  = require('multer');
var upload = multer({ dest: 'uploads/' });

app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.post("/metadata", upload.single('file'), function(req, res, next){
  res.send({ size: req.file.size });
});

var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
