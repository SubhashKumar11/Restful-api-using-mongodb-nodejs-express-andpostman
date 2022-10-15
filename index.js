const express = require('express');
const MensRanking = require('./src/models/Mens');
const app = express();
require("./src/db/Conn") //fetch connection details
const port = process.env.PORT || 3003
//to use json data in express we use below line
app.use(express.json());
//handling post request
app.post('/mens',async(req,res)=>{ //in postman paste localhost:3003/mens
try {
    const addingMensRanking = new MensRanking(req.body)
    console.log(req.body);
   const insertMens = await addingMensRanking.save();
   res.status(400).send(insertMens);
} catch (error) {
res.status(400).send(error)
}
})

//Handle get request using postman
app.get('/mens',async(req,res)=>{ //in postman paste localhost:3003/mens
    try {
        const getMens = await MensRanking.find({});
        res.status(400).send(getMens);
    } catch (error) {
    res.status(400).send(error)
    }
    })
    //Handle get request ony for single player using postman
app.get('/mens/:id',async(req,res)=>{ //in postman paste localhost:3003/mens
    try {
        const _id = req.params.id; //developer know which id is user typing
        const getMens = await MensRanking.findById(_id);
        res.status(400).send(getMens);
    } catch (error) {
    res.status(400).send(error)
    }
    })
        //Handle update request ony for single player using postman
app.patch('/mens/:id',async(req,res)=>{ //in postman paste localhost:3003/mens
    try {
        const _id = req.params.id; //developer know which id is user typing
        const getMens = await MensRanking.findByIdAndUpdate(_id,req.body); //req.body added beacause if we update any id it should be get reflected in db
        res.status(400).send(getMens);
    } catch (error) {
    res.status(500).send(error) //500 for server related error
    }
    })

            //Handle delete request ony for single player using postman
app.delete('/mens/:id',async(req,res)=>{ //in postman paste localhost:3003/mens
    try {
        const _id = req.params.id; //developer know which id is user typing .it is necessary to put
        const getMens = await MensRanking.findByIdAndDelete(_id); //req.body added beacause if we update any id it should be get reflected in db
        res.status(400).send(getMens);
    } catch (error) {
    res.status(500).send(error) //500 for server related error
    }
    })

app.listen(port,()=>{
    console.log('port listening at 3003')
})