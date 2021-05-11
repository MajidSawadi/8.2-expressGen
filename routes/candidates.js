var express = require('express');
var router = express.Router();
const candidatesData =require('./db.json');
/* GET candidates company& salary */
router.get('/', function(req, res, next) {
  const candidtaes = candidatesData.filter(c=> c.company === req.query.company && c.salary===req.query.salary);
  console.log({candidtaes});
  res.json(candidtaes);
});

router.post('/:id/:name/:age/:company', function(req , resp, next){

})

module.exports = router;
