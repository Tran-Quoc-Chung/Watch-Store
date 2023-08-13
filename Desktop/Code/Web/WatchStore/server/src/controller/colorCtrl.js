const db = require('../models/index.js');

const createColor = async (req,res) => {
    try {
        const newColor = await db.Color.create(req.body)
        res.status(200).json({message:"Create Color successfully", Color:newColor})
    } catch (error) {
        res.status(404).json({message:"Create Color failed", err:error.message})
    }
}
const deleteColor = async (req, res) => {
    try {
        const {color_id}=req.body
        const color = await db.Color.findOne({ where: { color_id } })
        if (!color) {
            res.status(404).json({ message: "Color not found" });
            return;
        }
        await db.Color.destroy({ where: { color_id } });
        res.status(200).json({message:"Delete color successfully"})
    } catch (error) {
        res.status(404).json({message:"Delete color failed", err:error.message})
    }
}
module.exports = {
    createColor,
    deleteColor
}