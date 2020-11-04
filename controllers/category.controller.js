const db=require('../models')

const getCatById=async(req,res)=>{
    try{
    const {catId}=req.params;
    const getCatById=await db.category.findOne({where:{cat_id:catId}})
    if(getCatById){return res.status(200).json(getCatById)} 

    return res.status(404).send('no ID')
    
}
catch(error)
{
    return res.status(500).send(error.message)
}
}
const getAllCat=async(req,res)=>{
const category=await db.category.findAll();
return res.json(category);
}


export{
    getCatById,getAllCat
}