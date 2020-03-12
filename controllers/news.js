const News = require('../models/News');
const paginate = require('mongoose-paginate');



async function createNews(req, res) {

    let { title, description, link, dni } = req.body;

    let news = new News({ title, description, link, dni });

    await news.save().then(news => {

        return res.status(200).send({ news });

    });

}



async function getNews(req, res) {


    var page = 1
    if (req.params.page) {
        page = req.params.page
    }

    let find = News.find({ "validated": true }).populate('find', 'description title created_at link');

    await News.paginate(find, { page: page, limit: 5 }, (err, news) => {

        if (err) return res.status(500).send({ message: `${err}` })

        return res.status(200).send({ news: news.docs});

    });
}


module.exports = {
    createNews,
    getNews
}