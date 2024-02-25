//create a User model in mongoose
import mongoose from 'mongoose';
import CryptoJS from 'crypto-js';


const Schema = mongoose.Schema;

/* example of a key schema
{
    key: "1234",
    user: ObjectId("60d21b8a3c4a7e49b1b28767"),
    uses: 0,
    created_at: "2021-06-23T20:28:25.000Z"
}
*/  

const KeySchema = new Schema({
    key : {
        type: String,
        default: CryptoJS.lib.WordArray.random(16).toString()
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    uses : {
        type: Number,
        default: 0
    },
    created_at: {
        type: Date,
        default: Date.now()
    
    }

});




let KeyModel = mongoose.models.Key|| mongoose.model('Key', KeySchema); // Create a Key model

export default KeyModel;

