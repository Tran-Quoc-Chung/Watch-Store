const db = require('../models/index.js');

const createBrand = async (req,res) => {
    try {
        const newBrand = await db.Brand.create(req.body)
        res.status(200).json({message:"Create brand successfully", brand:newBrand})
    } catch (error) {
        res.status(404).json({message:"Create brand failed", err:error.message})
    }
}

const deleteBrand = async (req, res) => {
    try {
        const {brand_id}=req.body
        const brand = await db.Brand.findOne({ where: { brand_id } })
        if (!brand) {
            res.status(404).json({ message: "Brand not found" });
            return;
        }
        await db.Brand.destroy({ where: { brand_id } });
        res.status(200).json({message:"Delete brand successfully"})
    } catch (error) {
        res.status(404).json({message:"Delete brand failed", err:error.message})
    }
}
module.exports = {
    createBrand,
    deleteBrand
}