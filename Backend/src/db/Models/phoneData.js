const mong = require("mongoose");

const phoneDataSchema = new mong.Schema({
    id: {type:Number},
    name: {type:String},
    category: {type:String},
    brand:{type:String},
    originalPrice: {type:String},
    salePrice:{type:String},
    highlights: {
        Ram: {type:String},
        Rom: {type:String},
        Processor: {type:String},
        Battery: {type:String},
        Camera: {type:String}
    },
    seller: {type:String},
    searchKeywords: [{type:String}],
    specifications: {
        ModelName: {type:String},
        ModelNumber: {type:String},
        Color: {type:String},
        SIMType: {type:String},
        Charging: {type:String},
        DisplaySize: {type:String},
        DisplayType: {type:String},
        OS: {type:String},
        Processor: {type:String},
        RAM: {type:String},
        ROM: {type:String},
        PrimaryCamera: {type:String},
        SecondaryCamera: {type:String},
        NetworkType: {type:String},
        Battery: {type:String},
        WarrantySummary: {type:String},
        Width: {type:String},
        Height: {type:String},
        Weight: {type:String}
    }
});

const phoneDataModel = mong.model("smartphone", phoneDataSchema);

module.exports = phoneDataModel;