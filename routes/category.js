
var router = express.Router();

import express from 'express'
import {getAllCat, getCatById} from '../controllers/category.controller'

router.get('/:catId',getCatById)
router.get('/',getAllCat)

module.exports=router;

