
var router = express.Router();

import express from 'express'
import {get} from '../controllers/index.controller'
import{makeMember} from '../controllers/index.controller'
import{deleteMember} from '../controllers/index.controller'
import{updateMember} from '../controllers/index.controller'
import{getOne} from '../controllers/index.controller'  

router.get('/',get)
router.post('/',makeMember)
router.delete('/:userId',deleteMember)
router.put('/:userId',updateMember)
router.get('/:userId',getOne)


module.exports = router;
