const mongoose = require('mongoose'); 
// const addressSchema = new mongoose.Schema({
//     street:String,
//     city:String
// })
const userSchema = new mongoose.Schema({
    name : String,
    age : {
        type:Number,
        min:1,
        max:100,
        validate:{
            validator: v => v%2 === 0,
            message : props => `${props.value} is not a even number`
        }
    },
    email:{
        type:String,
        require:true,
        minLength:10,
        lowercase:true
    },
    createdAt:{
        type:Date,
        immutable:true,
        default:new Date(),
    },
    updatedAt:{
        type:Date,
        default:new Date(),
    },
    bestFriend:{
        type: mongoose.SchemaTypes.ObjectId,
        ref:'User'},
    hobbies:[String],
    address:{
        street:String,
        city:String
    }
    // address:addressSchema
})
userSchema.method.sayHi = function () {
    console.log(`Hi my name is ${this.name}`)
}
userSchema.statics.findByName = function(name){
    return this.find({name:new RegExp(name, 'i')})
}
userSchema.query.byName = function(name){
    return this.where({name:new RegExp(name, 'i')})
}
userSchema.virtual('namedEmail').get( function(name){
    return `${this.name} <${this.email}>`
})
//middleware
userSchema.pre('save', function(next){
    this.updatedAt = Date.now()
    throw new Error('fail saved')
})
module.exports = mongoose.model('User', userSchema);










/**mongodb
 * main fun -> connection string9+1
 * create db
 * create collection
 * create collection2
 * ctreate document use insertOne
 * update document use updateOne
 * get document froom collection1 using findone and update collection2 
 * delete document use daleteOne,
 * ctreate 2 docs using insertMany, updateMany
 * delete deleteMany
 * delete collection
 * 
 * delete db
 * 
 * every fun should have logs
 *2 sec  sleep
 */