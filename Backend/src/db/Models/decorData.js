const mong = require("mongoose");
const productBaseModel = require("./Product");

const decorSchema = new mong.Schema({
    specifications:{
        type: Map,
        of: mong.Schema.Types.Mixed
      }
});

decorSchema.virtual("highlights").get(function () {
    const s = this.specs || {};
    return {
        f
    }
});

const decorDataModel = productBaseModel.discriminator("decorationProduct", decorSchema)

module.exports = decorDataModel;