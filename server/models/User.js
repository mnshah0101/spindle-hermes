//create a User model in mongoose
import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const Schema = mongoose.Schema;

/* example of a user schema
{
    email: "
    password: "
    username: "
    reset_password_token: "
    profile_picture: "
    apis: [ObjectId("60d21b8a3c4a7e49b1b28767"), ObjectId("60d21b8a3c4a7e49b1b28767")]
}
*/

const UserSchema = new Schema({
    email: { type: String, unique: true, lowercase: true },
    password: String,
    username: {
        type: String,
        unique: true
    },
    reset_password_token: String,
    profile_picture: String,
    apis :[
        {
            type: Schema.Types.ObjectId,
            ref: 'API'
        }
    
    ]
});


UserSchema.methods.comparePassword =   function comparePassword(password, callback) {
    return  bcrypt.compare(password, this.password, callback);
}

let UserModel = mongoose.models.User|| mongoose.model('User', UserSchema); // Create a User model

export default UserModel;

