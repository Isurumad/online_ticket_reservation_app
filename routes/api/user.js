const express = require('express');
const router= express.Router();
const bcrypt = require('bcryptjs')
const User = require('../../modals/User');

router.get('/',(req,res)=>{
    User.find().then((user)=>res.json(user))
});


router.route('/').get((req,res)=>{
    User.find((err,user)=>{
        if(err){
            console.log(err);
        }else{
            res.json(user);
        }
    })
})

router.post('/',(req,res)=>{
    User.findOne({email}).then(user=>{
        if(user){
            return res.status(400).json({msg:"user already exists"});
        }
    })
    const newUser = new User({
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        email:req.body.email,
        password:req.body.password
    });
    bcrypt.genSalt(10,(err,salt)=>{
        bcrypt.hash(newUser.password,salt,(err,hash)=>{
            if(err) throw err;
            newUser.password = hash;
            newUser.save().then(user=>res.json(user)).catch((e)=>res.status(400).send('Failed'));
        })
    })   
})




router.delete('/:id',(req,res)=>{
    User.findById(req.params.id).then(user => user.remove().then(()=>res.json({success:true})))
    .catch(err=>res.status(404).json({success:false}));
});

module.exports = router;