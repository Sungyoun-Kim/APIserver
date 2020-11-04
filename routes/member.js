
var router = express.Router();

import express from 'express'
import {get} from '../controllers/member.controller'
import{makeMember} from '../controllers/member.controller'
import{deleteMember} from '../controllers/member.controller'
import{updateMember} from '../controllers/member.controller'
import{getOne} from '../controllers/member.controller'

router.get('/',get)
router.post('/',makeMember)
router.delete('/:userId',deleteMember)
router.put('/:userId',updateMember)
router.get('/:userId',getOne)


module.exports = router;
