const express = require('express');
const router = express.Router();
const config = require('../configdb/database');
const Article = require('../models/allquiz');

// Register of article
router.post('/new-quiz', (req,res,next) => {

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
router.get('/get-quiz', (req, res) => {
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


module.exports = router;