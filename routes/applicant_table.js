
var router= express.Router();
import express from 'express'
import {makeApplicant} from '../controllers/applicant_table.controller'
import {getApplicantByBoardId} from '../controllers/applicant_table.controller'
import {deleteApplicant} from '../controllers/applicant_table.controller'

router.post('/',makeApplicant)
router.get('/:boardId',getApplicantByBoardId)
router.delete('/:memberId',deleteApplicant)

module.exports=router;







