const mongoose=require('mongoose');


const mongoURI='mongodb+srv://vikash1dubey:vikash1234@cluster0.cqjj0.mongodb.net/eCom?retryWrites=true&w=majority&appName=Cluster0';
const db=mongoose.connect(
    mongoURI,
    {
        useNewUrlParser:true
    }
).then(()=>console.log('MongoDb Connected')).catch(err=>console.log(err))

module.exports=db;