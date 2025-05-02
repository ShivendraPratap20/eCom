const mong = require("mongoose");

const laptopDataSchema = new mong.Schema({
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

const laptopDataModel = mong.model("laptop", laptopDataSchema);

module.exports = laptopDataModel;