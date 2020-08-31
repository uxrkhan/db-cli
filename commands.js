const commander = require('commander');
const inq = require('inquirer');

const { addUser, findUser, updateUser, removeUser, showAllUsers } = require('./models/user');

const prompts = [
    {
        type: 'input',
        name: 'firstName',
        message: 'User First Name:'
    },
    {
        type: 'input',
        name: 'lastName',
        message: 'User Last Name:'
    },
    {
        type: 'input',
        name: 'phoneNumber',
        message: 'User Phone Number:'
    },
    {
        type: 'input',
        name: 'email',
        message: 'User Email Address:'
    }
]

commander
    .version('1.0.0')
    .description('Database Management CLI');

commander
    .command('add')
    .alias('a')
    .description('Add a new user')
    .action(() => {
        inq.prompt(prompts).then(inputs => addUser(inputs));
    })

commander
    .command('find <name>')
    .alias('f')
    .description('Find a user with a particular name')
    .action((name) => {
        findUser(name);
    })

commander
    .command('update <_id>')
    .alias('u')
    .description('Update a user')
    .action((_id) => {
        inq.prompt(prompts).then(inputs => updateUser(_id, inputs));
    })
    
commander
    .command('remove <id>')
    .alias('r')
    .description('Remove a user with a particular id')
    .action((_id) => {
        removeUser(_id);
    });

commander
    .command('list')
    .alias('l')
    .description('List all the users in the database')
    .action(() => {
        showAllUsers();
    })

module.exports = commander;
