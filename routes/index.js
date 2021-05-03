var express = require('express');
var router = express.Router();
const controller = require('../controllers/index');


router.post('/articles', controller.article.postArticle);
router.get('/articles', controller.article.getAllArticle);
router.get('/articles/:articleId', controller.article.getDetailArticle);

module.exports = router;
