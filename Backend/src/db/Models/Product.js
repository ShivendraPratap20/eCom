const mongoose = require("mongoose");


const productBaseSchema = new mongoose.Schema(
    {
        name: { type: String, required: true, trim: true },
        slug: { type: String, required: true, unique: true },
        brand: { type: String, required: true, trim: true },
        originalPrice: { type: Number, required: true, min: 0 },
        salePrice: { type: Number, required: true, min: 0 },
        images: [String],
        stock: { type: Number, default: 0, min: 0 },
        seller: String,
        description: String,
        rating: {
            avg: { type: Number, default: 0 },
            count: { type: Number, default: 0 },
        },
        isFeatured: { type: Boolean, default: false },
        searchKeywords: [String],
    },
    { timestamps: true, discriminatorKey: "category" }
);


const productBaseModel = mongoose.model("product", productBaseSchema);


module.exports = productBaseModel;