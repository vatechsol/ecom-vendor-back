const express = require("express");
const app = express();
const router = require("./routes/product")

const cors=require("cors")
app.use(cors());
require("./db/db")
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));
app.use("/products", router)

app.listen(8000, () => {
    console.log("Server is working")
})