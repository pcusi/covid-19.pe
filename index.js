let express = require('express');
let mongo = require('mongoose');
let parser = require('body-parser');
let cors = require('cors');
let app = express();

//parse all values in the request body from any api tester.
app.use(parser.urlencoded({
    extended: false
}));
app.use(parser.json());

//use express with cors for any request of any application (desktop, web, mobile, other else).
app.use(cors());

//use api/v1 for any routes
let newsRoute = require('./routes/news.routes.js');
app.use('/api/v1', [newsRoute]);

//connecting with mongodb
let url = "mongodb://localhost:27017";
let port = process.env.PORT || 4000;
mongo.connect(`${url}/db_news_COVID-19`, {
    useUnifiedTopology: true,
    useCreateIndex: true,
    useNewUrlParser: true,
}).then(connected => {

    if (connected) console.log('MongoDB connected');
    app.listen(port, () => {
        console.log(`http://localhost:${port}/api/v1`);
    });

}).catch(err => console.log(err));
