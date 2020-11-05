
var router = express.Router();

import express from 'express'
import {createPost} from '../controllers/board.controller'
import {getAllPost} from '../controllers/board.controller'
import {getOnePost} from '../controllers/board.controller'


router.post('/',createPost)
router.get('/',getAllPost)
router.get('/:catId',getOnePost)






module.exports=router;