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

coffeeShopSchema.statics.makeGoogleMapsLink = function (locationString) {
    if (locationString && locationString.startsWith('https://www.google.com/maps')) {
      return locationString;
    } else {
      const locationEncoded = encodeURIComponent(locationString);
      return `https://www.google.com/maps?q=${locationEncoded}`;
    }
  };
  
const CoffeeShop = mongoose.model('CoffeeShop', coffeeShopSchema);
module.exports = CoffeeShop;