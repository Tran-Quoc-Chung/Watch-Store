const db = require('../models/index.js');

const createDialColor = async (req, res) => {
    try {
        const { name } = req.body;
        const createNew = await db.DialColor.create({ name: name });
        if (!createNew)
            return res.status(400).json("Create dialcolor failed.Try again!!");
        return res.status(200).json("Create successfully")
    } catch (error) {
        return res.status(400).json({message:"Create dialcolor failed.Try again!!", err:error.message});
    }
}

const createDialMaterial = async (req, res) => {
    try {
        const { name } = req.body;
        const createNew = await db.DialMaterial.create({ name: name });
        if (!createNew)
            return res.status(400).json("Create DialMaterial failed.Try again!!");
        return res.status(200).json("Create successfully")
    } catch (error) {
        return res.status(400).json({message:"Create DialMaterial failed.Try again!!", err:error.message});
    }
}

const createDialShape = async (req, res) => {
    try {
        const { name } = req.body;
        const createNew = await db.DialShape.create({ name: name });
        if (!createNew)
            return res.status(400).json("Create DialShape failed.Try again!!");
        return res.status(200).json("Create successfully")
    } catch (error) {
        return res.status(400).json({message:"Create DialShape failed.Try again!!", err:error.message});
    }
}

const createDialSize = async (req, res) => {
    try {
        const { name } = req.body;
        const createNew = await db.DialSize.create({ name: name });
        if (!createNew)
            return res.status(400).json("Create DialSize failed.Try again!!");
        return res.status(200).json("Create successfully")
    } catch (error) {
        return res.status(400).json({message:"Create DialSize failed.Try again!!", err:error.message});
    }
}

const createGender = async (req, res) => {
    try {
        const { name } = req.body;
        const createNew = await db.Gender.create({ name: name });
        if (!createNew)
            return res.status(400).json("Create Gender failed.Try again!!");
        return res.status(200).json("Create successfully")
    } catch (error) {
        return res.status(400).json({message:"Create Gender failed.Try again!!", err:error.message});
    }
}

const createMachineAndPower = async (req, res) => {
    try {
        const { name } = req.body;
        const createNew = await db.MachineAndPower.create({ name: name });
        if (!createNew)
            return res.status(400).json("Create MachineAndPower failed.Try again!!");
        return res.status(200).json("Create successfully")
    } catch (error) {
        return res.status(400).json({message:"Create MachineAndPower failed.Try again!!", err:error.message});
    }
}

const createStrapMaterial = async (req, res) => {
    try {
        const { name } = req.body;
        const createNew = await db.StrapMaterial.create({ name: name });
        if (!createNew)
            return res.status(400).json("Create StrapMaterial failed.Try again!!");
        return res.status(200).json("Create successfully")
    } catch (error) {
        return res.status(400).json({message:"Create StrapMaterial failed.Try again!!", err:error.message});
    }
}


const createTag = async (req, res) => {
    try {
        const { name } = req.body;
        const createNew = await db.Tag.create({ name: name });
        if (!createNew)
            return res.status(400).json("Create Tag failed.Try again!!");
        return res.status(200).json("Create successfully")
    } catch (error) {
        return res.status(400).json({message:"Create Tag failed.Try again!!", err:error.message});
    }
}

const createWaterResistance = async (req, res) => {
    try {
        const { name } = req.body;
        const createNew = await db.WaterResistance.create({ name: name });
        if (!createNew)
            return res.status(400).json("Create WaterResistance failed.Try again!!");
        return res.status(200).json("Create successfully")
    } catch (error) {
        return res.status(400).json({message:"Create WaterResistance failed.Try again!!", err:error.message});
    }
}

module.exports={
    createWaterResistance,
    createTag,
    createStrapMaterial,
    createGender,
    createDialSize,
    createDialShape,
    createDialMaterial,
    createDialColor,
    createMachineAndPower,
}