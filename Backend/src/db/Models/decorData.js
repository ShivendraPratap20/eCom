const mong = require("mongoose");

const decorSchema = new mong.Schema({
    name: {type:String},
    originalPrice:{type:String},
    salePrice:{type:String},
    category: {type:String},
    brand:{type:String},
    imageURL:{type:String},
    highlights:[
        {type:String}
    ],
    seller: {type:String},
    searchKeywords: [{type:String}],
    specifications:{
        type: Map,
        of: mong.Schema.Types.Mixed
      }
});

const decorDataModel = mong.model("homedecor", decorSchema);

module.exports = decorDataModel;