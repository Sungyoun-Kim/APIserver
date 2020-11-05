const db=require('../models')

const createPost=async(req,res)=>{
    const Post=await db.board.create(req.body);
    if(Post){
        return res.send("Post Created")
    }
    return res.json(createPost)
}
const getAllPostByCatID=async(req,res)=>{
    const {catId}=req.params;
    const post=await db.board.findAll({where:{category_cat_id:catId}});
    return res.json(post);
}
const getAllPost=async(req,res)=>
{
    const post= await db.board.findAll();
    return res.json(post);
}
const getOnePostByBoardID=async(req,res)=>{
    try{
        const {boardId}=req.params;
        const getOnePost=await db.board.findOne({where:{board_id:boardId}})
        if(getOnePost){return res.status(200).json(getOnePost);}
    
    return res.status(404).send('no ID')
}
catch(error){
    return res.status(500).send(error.message)
}
}

const deleteBoard=async(req,res)=>{
    try{
        const {boardId}=req.params;
        const deleted=await db.board.destroy({where:{board_id:boardId}})
        if(deleted){
            return res.send("Board deleted");
        }
        throw new Error("Board not Found");
    }
    catch(error){
        return res.status(500).send(error.message);
    }
}
const updateBoard=async(req,res)=>{
    try{
        const {boardId}=req.params;
        const [updated]=await db.board.update(req.body,{where:{board_id:boardId}})
        if(updated){
            return res.status(200).send("Board Revised");
        } 
        throw new Error(' board not Found');
    }
    catch(error){
        return res.status(500).send(error.message);
    }
};

export{
    createPost,getAllPostByCatID,
    getOnePostByBoardID,getAllPost,deleteBoard,updateBoard
}