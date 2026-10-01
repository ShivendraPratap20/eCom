const mong = require("mongoose");
//mong.connect(`mongodb://127.0.0.1:27017/eComDB`);
mong.connect(`mongodb+srv://shivendragkp2002:cfoyy77JeJNth3Qy@cluster0.b6cs8fs.mongodb.net/eComDB?retryWrites=true&w=majority&appName=Cluster0`)
.then(()=>{
    console.log(`Database connection established`);
}).catch((err)=>{
    console.log(`Error occured while connecting with database ${err}`);
});

async function getCollections(params) {
    try {
        const collectionArray = await mong.listCollections
    } catch (error) {
        console.log(`Collection error ${error}`)
    }
    
}

module.exports = mong;