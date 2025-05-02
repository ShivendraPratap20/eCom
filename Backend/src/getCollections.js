const mong = require("./db/conn");

const getCollections = async ()=>{
    const db = mong.connection.db;
    const collectionName = [];
    const collections = await db.listCollections().toArray();
    collections.forEach(val=>{
        collectionName.push(val.name);
    });
    return collectionName;
}
module.exports = getCollections;