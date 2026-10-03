const mong = require("mongoose");
const productBaseModel = require("./Product");

const footWearsDataSchema = new mong.Schema({
    specifications: {
        type: Map,
        of: mong.Schema.Types.Mixed
    }
});

footWearsDataSchema.virtual("highlights").get(function () {
    const s = this.specs || {};
    return {
        f
    }
});

const footWearsDataModel = productBaseModel.discriminator("footwear", footWearsDataSchema);
module.exports = footWearsDataModel;