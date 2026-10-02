const mongoose = require("mongoose");
const productBaseModel = require("../Product");


const smartphoneSchema = new mongoose.Schema({
    modelName: String,
    modelNumber: String,
    specs: {
        ram: Number,          
        storage: Number,      
        processor: String,
        battery: Number,      
        primaryCamera: String,
        secondaryCamera: String,
        displaySize: Number,  
        displayType: String,
        os: String,
        color: String,
        simType: String,
        networkType: String,
        charging: String,
    },
    dimensions: { width: Number, height: Number, weight: Number },
    warranty: String,
});

// highlights are derived, not stored
smartphoneSchema.virtual("highlights").get(function () {
  const s = this.specs || {};
  return {
    ram: s.ram && `${s.ram} GB`,
    storage: s.storage && `${s.storage} GB`,
    processor: s.processor,
    battery: s.battery && `${s.battery} mAh`,
    camera: s.primaryCamera,
  };
});

const smartphoneModel = productBaseModel.discriminator("smartphone", smartphoneSchema);

module.exports = smartphoneModel;