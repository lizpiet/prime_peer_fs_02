var express = require('express');
var router = express.Router();
var path = require('path');
var app = express();
var cutie = require('../models/cute.json');
var fs = require('fs');
var jsonquery = require('json-query');

var fileLocation = path.join(__dirname, '../models/cute.json');

console.log(fileLocation);



/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname, "../views/index.html"))
});

router.get('/images/:id?', function(req, res, next) {
  var id = req.params.id;

  fs.readFile(fileLocation, function(err, data){
    var obj = JSON.parse(data);

    var query = getJsonQueryString('id', id);

    if(id){
      var cuteMonster = jsonquery(query, {data: obj}).value;
      console.log(cuteMonster);
      res.send(cuteMonster)
    } else {
      res.send(obj);
    }
  })
});

function getJsonQueryString(key, valueToSearchFor){
  var myString = '[' + key + '=' + valueToSearchFor + ']';
  console.log('Generated json query string:', myString);
  return myString;
}

module.exports = router;
