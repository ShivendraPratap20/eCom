const mong = require("mongoose");

const smartTVSchema = new mong.Schema({
    name: { type: String },
    originalPrice: { type: String },
    salePrice: { type: String },
    category: { type: String },
    brand: { type: String },
    imageURL:{type:String},
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

const smartTVModel = mong.model("smarttv", smartTVSchema);

module.exports = smartTVModel;