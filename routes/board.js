
var router =express.Router();

import express from 'express'
import {createPost} from '../controllers/board.controller'
import {getAllPost} from '../controllers/board.controller'
import {getOnePostByBoardID} from '../controllers/board.controller'
import {getAllPostByCatID} from '../controllers/board.controller'
import {deleteBoard} from '../controllers/board.controller'
import {updateBoard} from '../controllers/board.controller'


router.post('/',createPost)
router.get('/',getAllPost)
router.get('/:boardId',getOnePostByBoardID)
router.get('/category/:catId',getAllPostByCatID)
router.delete('/:boardId',deleteBoard)
router.put('/:boardId',updateBoard)





module.exports=router;