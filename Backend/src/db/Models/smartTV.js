const mong = require("mongoose");
const productBaseModel = require("./Product");

const smartTVSchema = new mong.Schema({
    specifications: {
        type: Map,
        of: mong.Schema.Types.Mixed
    }
});

smartTVSchema.virtual("highlights").get(function () {
    const s = this.specs || {};
    return {
        f
    }
});

const smartTVModel = productBaseModel.discriminator("smarTV", smartTVSchema);

module.exports = smartTVModel;