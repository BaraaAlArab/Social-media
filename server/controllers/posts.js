import Post from "../models/Post.js"
import User from "../models/User.js"
/**CREAT */

export const createPost = async(req, res) =>{
    try{
        const {userId, description,picturePath}=req.body;
        const user = await User.findById(userId)

        const newPost = newPost({
            firstName:user.firstName,
            lastName: user.lastName,
            location: user.location,
            description,
            picturePath:user.picturePath,
            likes:{},
            comments:{}
        })
        await newPost.save();

        const post = await Post.find()
        res.status(201).json(post);
    }catch(err){
        res.status(409).json ({message: err.message})
    }
}
/**READ */
export const getFeedPosts = async(req, res) =>{
try{
    const post = await Post.find()
    res.status(200).json(post);
}catch(err){
    res.status(404).json ({message: err.message})
}
}
export const getUserPosts = async (req, res)=>{
    try{
        const {userId} = req.params;
        const post = await post.find ({userId});
        res.status(200).json(post);
    }catch(err){
        res.status(404).json({message: err.message});
    }
}

/**UPDATE */

export const likepost = async (req, res)=>{
    try{
       const {id} =req.params;
       const {userId} = req.body;
       const post = await postMessage.findById(id);
       const isliked = post.likes.get(userId);

       if(isliked){
        post.likes.delete(userId);
       }else{
        post.likes.set(userId);
       }

       const updatePost =await post.findByIdAndUpdate(
        id,
        {
            likes:post.likes
        },
        {new:true}
    )
        res.status(200).json(post);
    }catch(err){
        res.status(404).json({message: err.message});
    }
}