const Mongoose = require("mongoose");
require("dotenv").config();
let {Schema} = Mongoose;


let UserSchema = new Schema({
    uid : String,
    username:String,
    email: String,
    avatar : {type : String, default : process.env.AVATAR_DEF},
    isAdmin : {
        type : Boolean,
        default:false
    },
    createdAt : {
        type : Date,
        default : Date.now
    }
})

UserSchema.statics = {
    createNewUser(uid,username,email){
        return this.create({
            uid:uid,
            username:username,
            email:email
        })
    }
}

module.exports = Mongoose.model("users",UserSchema)
