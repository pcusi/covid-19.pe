const express = require('express');
const router = express.Router();

const newsController = require('../controllers/news');

router.post('/create-news', newsController.createNews);
router.get('/news/:page?', newsController.getNews);


module.exports = router;