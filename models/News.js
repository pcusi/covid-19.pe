let mongo = require('mongoose');
const paginate = require('mongoose-paginate');


let newsModel = mongo.Schema({
    title: { type: String, required: true},
    description: { type: String, required: true },
    created_at: { type: Date, default: Date.now },
    link: { type: String },
    validated: { type: Boolean, default: false, selected: false },
    dni: { type: String }
});

newsModel.plugin(paginate);


module.exports = mongo.model('News', newsModel);