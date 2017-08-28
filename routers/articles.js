const express = require('express');
const router = express.Router();
const config = require('../configdb/database');
const Article = require('../models/article');

// Register of article
router.post('/new-article', (req,res,next) => {

    let article = new Article();
    article.author = req.body.author;
    article.sector = req.body.sector;
    article.tag = req.body.tag;
    article.title = req.body.title;
    article.body = req.body.body;
   // return ----> this fucking return lost my almost 4 hr
    article.save(function(err){
        if(err){
              res.json({success: false, msg: 'Failed to Register the Article' });

        } else {
            res.json({success: true, msg: 'New Article is Registered'});
        }
    });

    /* // matheko lai alternate tara error xa melauna baki xa
    let newArticle = new Article({
        title: req.body.title
     });
    Article.addArticle( newArticle,(err, article)=>{
        if(err){
            res.json({success: false, msg: 'Failed to Register the Article' });

        } else {
            res.json({success: true, msg: 'New Article is Registered'});
        }
    });
    */
});

 // Getting Data from Database method 1
router.get('/get-article', (req, res) => {
        Article.find({}).then((data) => {
        res.json(data);
    })
});
/*
// Geting Data from Database Method 2
router.get('/get-article', (req, res) => {
        Article.find({}, (err, datasharu) => {
        if(err){
            console.log(err);
        }
           else {   
                res.json(datasharu);
         }
    })
});
*/

// this is for Update the article
router.put('/update-article/:id', (req, res) => {
        Article.update({_id: req.params.id}, req.body).then(() => {
        res.json({message: "aaja vayana kinwa hoooo"});
    })
});


// this is to delete the article post 
router.delete('/delete-article/:id', (req, res) => {
        Article.remove({_id: req.params.id}).then(() => {
        res.json({message: "Data Is Deleated Successfully"});
    })
});


module.exports = router;