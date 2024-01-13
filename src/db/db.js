const mongoose = require('mongoose')
const {DB_NAME} = require('../constant')


const connectdb = async ()=>{
    try {
        const connectioninstance = await mongoose.connect( `${process.env.DB}/${DB_NAME}`)
        console.log(`\n MongoDB connected !! DB HOSt: ${connectioninstance.connection.host}`);
    } catch (error) {
        console.log("MONGODB connection error",error)
        process.exit(1)
    }
}

module.exports = connectdb