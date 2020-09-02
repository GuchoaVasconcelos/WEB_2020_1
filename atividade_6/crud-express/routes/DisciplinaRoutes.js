var express = require('express');
var router = express.Router();
var DisciplinaService = require('../services/DisciplinaService')



router.get('/list', function(req,res,next){
    return res.json(DisciplinaService.list());
})

router.post('/create', function(req,res,next){
    return res.json(DisciplinaService.register(req.body));
});


router.put('/update/:id', function(req,res,next){
    return res.json(DisciplinaService.update(req.params.id,req.body));
})

router.delete('/delete/:id', function(req,res,next){
    const ok = DisciplinaService.delete(req.params.id);
    if(ok) return res.json({"sucess": true});
    else return res.json({"sucess": false});
})

router.get('/retrieve/:id', function(req,res,next){
    return res.json(DisciplinaService.retrieve(req.params.id));
})

module.exports = router;