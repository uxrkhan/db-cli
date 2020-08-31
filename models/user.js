const mongoose = require('mongoose');

// User schema
const schema = mongoose.Schema({
    firstName: { type: String },
    lastName: { type: String },
    phoneNumber: { type: String },
    email: { type: String }
});

const User = mongoose.model('user', schema);

const addUser = (user) => {
    User.create(user).then(user => {
        console.log('New user added.');
        mongoose.connection.close();
    });
}

const findUser = (name) => {
    const search = new RegExp(name, 'i');
    User.find({$or: [{firstName: search}, {lastName: search} ]})
        .then(result => {
            console.log(`Found ${result.length} users.`)
            result.forEach(user => console.log(`User matched: ${user.firstName} ${user.lastName}`))
            mongoose.connection.close();
        });
}

const updateUser = (_id, user) => {
    User.updateOne({_id}, user)
        .then(user => {
            if (user["n"] == 0) 
                console.log('ERROR: ID does not match any user.')
            else if (user["nModified"] == 0) 
                console.log('ERROR: Could not modify user.');
            else
                console.log('User updated.');
            mongoose.connection.close();
        });
}

const removeUser = (_id) => {
    User.deleteOne({ _id })
        .then(user => {
            if (user["deletedCount"] == 0)
                console.log('ERROR: User does not exist.');
            else
                console.log('User removed.');
            mongoose.connection.close();
        });
}

const showAllUsers = () => {
    User.find().then(users => {
        if (users.length > 0) {
            var i = 1;
            users.forEach(user => {
                console.log(`${i++}.\t${user.firstName}\t${user.lastName}\t${user.phoneNumber}\t${user.email} \t${user._id}`)
            });
        } else {
            console.log('ERROR: No users. Database empty.');
        }
        mongoose.connection.close();   
    });
}

module.exports = {
    addUser,
    findUser,
    updateUser,
    removeUser,
    showAllUsers
};