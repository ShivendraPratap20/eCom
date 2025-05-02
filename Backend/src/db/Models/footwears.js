const mong = require("mongoose");

const footWearsDataSchema = new mong.Schema({
    name: { type: String },
    originalPrice: { type: String },
    salePrice: { type: String },
    category: { type: String },
    imageURL:{type:String},
    brand: { type: String },
    highlights: [
        { type: String }
    ],
    sellerName: { type: String },
    searchKeywords: [{ type: String }],
    specifications: {
        type: Map,
        of: mong.Schema.Types.Mixed
    }
});

const footWearsDataModel = mong.model("footwear", footWearsDataSchema);

module.exports = footWearsDataModel;