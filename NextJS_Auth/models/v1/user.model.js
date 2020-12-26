import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'

const userScheme = mongoose.Schema({
    Username:{type: String},
    Email_address:{ type: String, unique: true},
    Password: { type:String},
    Salt: {type: String},
    Roles:[String],
    Confirmed: {type: Boolean, default: false}
},{timestamps:true});


userScheme.pre('save',async function(next){
    if(!this.isModified('Password')) return next();
    this.Salt = bcrypt.genSaltSync();
    this.Password = bcrypt.hashSync(this.Password,this.Salt);
    next();
})

userScheme.methods = {
    async comparePassword(unHashedPassword){
        const _Pass = bcrypt.hashSync(unHashedPassword,this.Salt);
        return (_Pass === this.Password)
    }
}

module.exports =   mongoose.models.User || mongoose.model('User',userScheme);