const mongoose=require('mongoose');

const productSchema=new mongoose.Schema({
   
    id:{
        type:Number,
        require:true
    },
    ProductName:{
        type:String,
        require:true
    },
    Category:{
        type:String,
        require:true
    },
    Brand:{
        type:String,
        require:true
    },
    Price:{
        type:Number,
        require:true
    },
    description:{
        type:String,
        require:true
    },
    type:{
        type:String,
        require:true
    },
    outOfStock:{
        type:Boolean,
        require:true
    },
    image:{
        type:String,
        require:true
    }

})

const products=mongoose.model("products",productSchema);

module.exports=products;

