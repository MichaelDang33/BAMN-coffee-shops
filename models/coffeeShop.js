const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const coffeeShopSchema = new Schema({
    name: String,
    location: String,
    featuredItems: String,
    description: String,
    rating: Number,
    image: String,
})

const CoffeeShop = mongoose.model('CoffeeShop', coffeeShopSchema);