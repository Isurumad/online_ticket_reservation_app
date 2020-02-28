const express = require('express');
const router= express.Router();

const User = require('../../modals/User');

router.get('/',(req,res)=>{
    User.find().then((user)=>res.json(user))
});

router.post('/',(req,res)=>{
    const newUser = new User({
        first_name:req.body.first_name
    });

    newUser.save().then(user=>res.json(user));
});

router.delete('/:id',(req,res)=>{
    User.findById(req.params.id).then(user => user.remove().then(()=>res.json({success:true})))
    .catch(err=>res.status(404).json({success:false}));
});

module.exports = router;