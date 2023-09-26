const mongoose = require('mongoose');
const User = require('./Users');
mongoose.connect("mongodb://localhost/admin")

run()
async function run() {
    try {
        const user = await User.findOne({name:'bunny', email:'bunny@gmail.com'})
        console.log(user)
        await user.save()
        console.log(user)
        user.sayHi()
        // const user = await User.where("age")
        //     .gt(23)
        //     .lt(35)
        //     .where('name')
        //     .equals('bunny')
        //     .populate('bestFriend')
        //     .limit(1);

        // user[0].bestFriend = '6505f8bb6fa2bf3747af5583'
        // await user[0].save()
        // const user = await User.find({name:'gill'})
        // const user = await User.create({
        //     name:'venky',
        //     age:34,
        //     email:'BUNNY@gmail.com',
        //     hobbies:['running','walking','reading'],
        //     address:{street:'sagraasan',city:'gandhinagar'}
        // });
        console.log(user)
    } catch (e) {
        console.log(e.message)
    }

}

// async function run(){
//     const user = await User.create({name:'bunny',age:32});
//     user.name= 'mani';
//     await user.save();
//     // const user = new User({ name: 'nani'})
//     // await user.save()
//     console.log(user)
// }

// const user = new User({name : 'sunny' , age : 24});
// user.save().then(()=>console.log('User saved'));













// const mongoose = require('mongoose');
// async function connectToMongoDB() {
//   try {
//     await mongoose.connect('mongodb://localhost:27017/admin', { useNewUrlParser: true });
//     console.log('Connected to MongoDB');
//   } catch (error) {
//     console.error('Error connecting to MongoDB:', error);
//   }
// }

// connectToMongoDB();
