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
const updateApplicant=async(req,res)=>{
    /*const boardId=req.params.boardId
    const memberId=req.params.memberId*/
    var query='DELETE FROM applicant_table WHERE board_board_id =boardId AND member_UID= "?" values(erqrer,qerq)'
await db.sequelize.query(query,
{   replacement: {boardId:'req.params.boardId',memberId:'req.params.memberId'},
    type: db.sequelize.QueryTypes.DELETE}
).then((result)=>(console.log(result)))


}
export{
    getApplicantByBoardId,updateApplicant,makeApplicant
}