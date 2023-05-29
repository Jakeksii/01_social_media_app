import mongoose from "mongoose";
import validator from "validator";

const postSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    location: String,
    description: {
        type: String,
        required: true
    },
    userPicturePath: String,
    picturePath: String,
    likes: {
        type: Map, //more efficient way than object array
        of: Boolean
    },
    comments: {
        type: Array,
        default: []
    }

}, {timestamps: true}); //adds createdAt, updatedAt

const Post = mongoose.model("Post", postSchema);
export default Post;