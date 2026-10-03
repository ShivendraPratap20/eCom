const mong = require("mongoose");
const productBaseModel = require("./Product");

const headPhoneSchema = new mong.Schema({
    specifications: {
        type: Map,
        of: mong.Schema.Types.Mixed
    }
});

const headPhoneDataModel = productBaseModel.discriminator("headphone", headPhoneSchema);

module.exports = headPhoneDataModel;