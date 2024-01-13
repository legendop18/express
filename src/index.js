const connectdb = require("../src/db/db")
const app = require('./app')

connectdb()

.then(() =>{
    app.listen(process.env.PORT, ()=>{
        console.log(`SERVER STARTED ${process.env.PORT}`);
    })
})
.catch((err) =>{
    console.log(`Mongodb connection failed `, err);
})




