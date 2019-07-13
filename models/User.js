import  Mongoose from 'mongoose';
import crypto from 'crypto';


const userSchema = new Mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    salt : {
        type : String
    }
});

class user {

    static getUserByEmail(email) {

        return this.findOne({
            email : email
        }).exec();
    }

    static generatePassword(password) {
        const salt = crypto.randomBytes(16).toString('hex');

        const hash = crypto.pbkdf2Sync(password,salt,10000,512,'sha512').toString('hex');

        return {
            salt,
            hash
        }
    }

    static validatePassword(userInfo) {

        const hash = crypto.pbkdf2Sync(userInfo.password,userInfo.salt,10000,512,'sha512').toString('hex');

        return userInfo.hash === hash;

    }

    static createUser(userInfo){

        const { salt,hash } = this.generatePassword(userInfo.password);
        
        const user = this({
            name : userInfo.name,
            email : userInfo.email,
            password : hash,
            salt : salt
        })

        return user.save();
    }
}


userSchema.loadClass(user);

export default Mongoose.model('User',userSchema);
