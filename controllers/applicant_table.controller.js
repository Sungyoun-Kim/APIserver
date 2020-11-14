const db=require('../models')

const getApplicantByBoardId=async(req,res)=>{
    const {boardId}=req.params
    const applicant=await db.applicant_table.findAll({where:{board_board_id:boardId}});
    return res.json(applicant);

}
const makeApplicant=async(req,res)=>{
    const post=await db.applicant_table.create(req.body);
    if(post)
    {
        return res.send("applicant added")
    }
    return res.json(makeApplicant)
}
const updateApplicant=async(req,res)=>{ /* 왜 없는값을 지우려해도 에러 안나는지 모르겠음*/
    
    const deleted=await db.sequelize.query("DELETE FROM applicant_table WHERE board_board_id =$1 AND member_uid= $2",
{   bind: [req.params.boardId,req.params.memberId],
}
    ).then(res.send("update complete"))
}


export{
    getApplicantByBoardId,updateApplicant,makeApplicant
}