
var router= express.Router();
import express from 'express'
import {makeApplicant} from '../controllers/applicant_table.controller'
import {getApplicantByBoardId} from '../controllers/applicant_table.controller'
import {updateApplicant} from '../controllers/applicant_table.controller'

router.post('/',makeApplicant)
router.get('/:boardId',getApplicantByBoardId)
router.delete('/:boardId/:memberId',updateApplicant)

module.exports=router;







