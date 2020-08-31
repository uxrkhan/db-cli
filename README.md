# db-cli
A command line interface for managing users on a MongoDB database made using node.js, inquirer.js and commander.js

## Installation

Install the npm packages and then link them to an executable.
```
npm install

npm link
```

## Connect to a MongoDB database

You can connect to a local database using the `mongo` command or you can connect to cloud. 

##### (Optional)
In order to connect to cloud you need to edit the `config/keys.js` file and enter the credentials.

```js
module.exports = {
    uri: "mongodb+srv://USERNAME:PASSWORD@CLUSTER_NAME.mongodb.net/test?retryWrites=true&w=majority"
}
```

## Run the program

```
$ dbcli --help
Connected.
Usage: index [options] [command]

Database Management CLI

Options:
  -V, --version   output the version number
  -h, --help      display help for command

Commands:
  add|a           Add a new user
  find|f <name>   Find a user with a particular name
  update|u <_id>  Update a user
  remove|r <id>   Remove a user with a particular id
  list|l          List all the users in the database
  help [command]  display help for command
```

Start by adding a new user

```
$ dbcli add
Connected to database.
? User First Name: Sherlock
? User Last Name: Holmes
? User Phone Number: 7503489201
? User Email Address: sherlock@gmail.com
New user added.
```

You can view the list of all users by using the `list` command:
```
$ dbcli list
Connected to database.
1.  Sherlock    Holmes  7503489201  sherlock@gmail.com      5f4d30614bcc21212cbc47b3
2.  John        Watson  8749283428  drwatson@gmail.com      5f4d30dc1b229e0fcc2727dd
```
