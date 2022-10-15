const mongoose = require('mongoose')
mongoose.connect("mongodb://localhost:27017/olympics",
).then(()=>{
    console.log('connection with db done.')
}).catch((e)=>{
    console.log('something went wrong in db connection')
})