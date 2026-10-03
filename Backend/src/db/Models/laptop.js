const mong = require("mongoose");
const productBaseModel = require("./Product");

const laptopDataSchema = new mong.Schema({
    specifications: {
        type: Map,
        of: mong.Schema.Types.Mixed
    }
});

laptopDataSchema.virtual("highlights").get(function () {
    const s = this.specs || {};
    return {
        f
    }
});

const laptopDataModel = productBaseModel.discriminator("laptop", laptopDataSchema);

module.exports = laptopDataModel;