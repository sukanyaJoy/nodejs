var express=require('express');
var router = express.Router();
var vd =  require('../videodata.json'); //.. means move up directory

/*GET home page. */

router.get('/',function (req, res, next){
  res.render('index', {
    title: 'Express',
    name: 'Emi'
    videodata:vd
  })
});
    
    module.exports = router;
