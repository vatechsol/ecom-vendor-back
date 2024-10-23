const express = require("express");
const router = express.Router();
const productModel = require("../modal/products");

router.post("/", async (req, res) => {
    try {
        const data = req.body;
        const productRes = await productModel.insertMany(data); // Save the product instance
        res.status(201).send("data is saved");
    } catch (err) {
        console.log(err);
        res.status(400).send({ error: 'Error saving product', details: err.message }); // Send a more meaningful error response
    }
});

module.exports = router;
