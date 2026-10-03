const mong = require("mongoose");
const productBaseModel = require("./Product");

const clothDataSchema = new mong.Schema({
    specs: {
        type: Map,
        of: mong.Schema.Types.Mixed
    }
});

clothDataSchema.virtual("highlights").get(function () {
    const s = this.specs || {};
    return {
        f
    }
})

const clothDataModel = productBaseModel.discriminator("cloth", clothDataSchema)

module.exports = clothDataModel;