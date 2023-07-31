const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const coffeeShopSchema = new Schema({
    name: { type: String, required: true },
    location: { type: String },
    featuredItems: { type: String },
    description: { type: String, required: true },
    website: { type: String },
    rating: { type: Number },
    image: { type: String },
})

const CoffeeShop = mongoose.model('CoffeeShop', coffeeShopSchema);
module.exports = CoffeeShop;