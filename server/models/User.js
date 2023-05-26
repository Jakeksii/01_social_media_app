import mongoose from "mongoose";
import validator from "validator";

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 15
    },
    lastName: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 15
    },
    email: {
        type: String,
        required: true,
        maxlength: 50,
        unique: true,
        index: true,
        lowercase: true,
        trim: true,
        validate: {
            validator: function(value) {
                return validator.isEmail(value);
            },
            message: 'Invalid email address'
        }
    },
    password: { //Normally would have more configurations
        type: String,
        required: true,
        minlength: 5
    },
    picturePath: {
        type: String,
        default: ""
    },
    friends: { 
        type: Array,
        default: []
    },
    location: String,
    occupation: String,
    viewedProfile: Number,
    impressions: Number
}, {timestamps: true}); //adds createdAt, updatedAt

const User = mongoose.model("User", UserSchema);
export default User;