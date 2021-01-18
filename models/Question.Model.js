const Mongoose = require("mongoose")
let {Schema} = Mongoose;

let QuestionSchema = new Schema ({
    uid : String,
    username : String,
    grade : String,
    school: String,
    content : String,
    status : {
        type:String,
        default : "pending"
    },
    createdAt : {
        type : Date,
        default : Date.now
    }

})

QuestionSchema.statics = {
    createNewQuestion(uid, username, grade, school, content){
        this.create({
            uid : uid,
            username : username,
            grade : grade,
            school : school,
            content : content
        })
    }
}

module.exports = Mongoose.model("questions",QuestionSchema)
