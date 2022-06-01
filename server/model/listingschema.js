import pkg from "mongoose";

const listingschema = pkg.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    symbol: {
        type: String,
        required: true,
        trim: true
    },
    marketCap: {
        type: String,
        required: true,

    },
    price: {
        type: Number,
        required: true,
    },
    isSaved: {
        type: Boolean,
        required: true,
        default: false

    }





})


const listing = pkg.model('listing', listingschema)
export default listing;