const db=require('../models')

const get = async (req, res) => {
    const users = await db.member.findAll();

    return res.json(users);
  } 

const makeMember= async(req,res)=>{
 
      const users=await db.member.create(req.body);
      if(users){
          return res.send("member signed up")
      }
      return res.json(makeMember);
}
const getOne=async(req,res)=>{
    try{
        const {userId}=req.params;
        const getOne=await db.member.findOne({where:{member_uid:userId}})
        if(getOne){return res.status(200).json(getOne);
    }
    return res.status(404).send('no ID')
}
catch(error){
    return res.status(500).send(error.message)
}
}
const deleteMember=async(req,res)=>{
    try{
    const {userId}=req.params;
    const deleted=await db.member.destroy({where:{member_uid:userId}})
    if(deleted){
        return res.send("Member deleted");

    }
    throw new Error("Member not Found");}
    catch(error){
        return res.status(500).send(error.message);
    }
}
const updateMember=async(req,res)=>{
    try{
    const {userId}=req.params;
    const [updated]=await db.member.update(req.body,{where:{member_uid:userId}})
    if(updated){
       /* const updatedUser=await db.member.findOne({where:{member_uid:userId}})*/
        return res.status(200).send("update complete");
    }
    throw new Error('User not Found');
    }
    catch(error){
    return res.status(500).send(error.message);
}
};
export {
get,makeMember,deleteMember,updateMember,getOne
}