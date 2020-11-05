const db=require('../models')

const createPost=async(req,res)=>{
    const Post=await db.board.create(req.body);
    if(Post){
        return res.send("Post Created")
    }
    return res.json(createPost)
}
const getAllPost=async(req,res)=>{
    const post=await db.board.findAll();
    return res.json(post);
}
const getOnePost=async(req,res)=>{
    try{
        const {catId}=req.params;
        const getOnePost=await db.board.findOne({where:{category_cat_id:catId}})
        if(getOnePost){return res.status(200).json(getOnePost);}
    
    return res.status(404).send('no ID')
}
catch(error){
    return res.status(500).send(error.message)
}

}
export{
    createPost,getAllPost,getOnePost
}