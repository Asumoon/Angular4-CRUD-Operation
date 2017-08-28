const mongoose = require('mongoose');
const config = require('../configdb/database');

const ArticleSchema = mongoose.Schema({
    quiz:[{
                author:{
                type: String
                },
                sector:{
                    type: String
                },
                tag:{
                    type: String
                },
                title:{
                    type: String
                },
    }],

    body:{
        type: String
    },

});

const Article = module.exports = mongoose.model('Article', ArticleSchema)

/*
module.exports.addArticle = function(newArticle, callback){
    console.send('newArticle');
    console.log('newArticle')
}
*/