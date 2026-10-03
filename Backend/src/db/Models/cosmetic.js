const mong = require("mongoose");
const productBaseModel = require("./Product");

const cosmeticDataSchema = new mong.Schema({
    specifications: {
        type: Map,
        of: mong.Schema.Types.Mixed
    }
});

cosmeticDataSchema.virtual("highlights").get(function () {
    const s = this.specs || {};
    return {
        f
    }
});


const cosmeticDataModel = productBaseModel.discriminator("cosmetic", cosmeticDataSchema);

module.exports = cosmeticDataModel;