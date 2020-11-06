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
const deleteApplicant=async(req,res)=>{
    try{
        const {memberId}=req.params;

        const deleted=db.applicant_table.findAll().then(db.applicant_table.destroy({where:{member_uid:memberId}}))
        
        /*const deleted=await db.applicant_table.destroy({where:{member_uid:memberId}})*/
        if(deleted){
            return res.send("applicant deleted")
        }
        throw new Error("member not found")
    }
    catch(error)
    {
        return res.status(500).send(error.message)
    }
}


export{
    getApplicantByBoardId,deleteApplicant,makeApplicant
}