const express = require('express');
const router = express.Router();

const Advertisement = require('../../modals/Advertisement');

router.get('/',(req,res)=>{
    Advertisement.find().then((add)=>res.json(add));
});

router.route('/advertisement').get((req,res)=>{
    Advertisement.find((err,advertisement)=>{
        if(err){
            console.log(err);
        }else{
            console.log('No Errors');
            res.json(advertisement);
        }
    })
})

router.post('/',(req,res)=>{
    const newAdd = new Advertisement({
        title:req.body.title,
        price:req.body.price,
        conatctNumber:req.body.conatctNumber,
        description:req.body.description,
        images:req.body.images 
    });

    newAdd.save().then(add=>res.json(add)).catch((e)=>res.status(400).send('Failed'))
})

