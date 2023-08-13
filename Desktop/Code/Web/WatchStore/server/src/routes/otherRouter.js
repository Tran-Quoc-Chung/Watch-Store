const { createWaterResistance,
    createTag,
    createStrapMaterial,
    createGender,
    createDialSize,
    createDialShape,
    createDialMaterial,
    createDialColor,
    createMachineAndPower, } = require('../controller/otherCtrl');

const { authMiddleware ,isAdmin} = require('../middleware/authMiddlewares.js');

const express = require('express');

const router = express.Router();


router.post('/createtag', authMiddleware, isAdmin, createTag);
router.post('/createstrapmaterial', authMiddleware, isAdmin, createStrapMaterial);
router.post('/createwaterresistace', authMiddleware, isAdmin, createWaterResistance);
router.post('/creategender', authMiddleware, isAdmin, createGender);
router.post('/createdialsize', authMiddleware, isAdmin, createDialSize);
router.post('/createshape', authMiddleware, isAdmin, createDialShape);
router.post('/createdialmaterial', authMiddleware, isAdmin, createDialMaterial);
router.post('/createcolor', authMiddleware, isAdmin, createDialColor);
router.post('/createmachineandpower', authMiddleware, isAdmin, createMachineAndPower);

module.exports = router;