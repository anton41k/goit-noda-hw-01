const { Command } = require('commander');
const program = new Command();
program
  .option('-a, --action <type>', 'choose action')
  .option('-i, --id <type>', 'user id')
  .option('-n, --name <type>', 'user name')
  .option('-e, --email <type>', 'user email')
  .option('-p, --phone <type>', 'user phone');

program.parse(process.argv);

const options = program.opts();

const operations = require('./db');

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case 'list':
        const contacts = await operations.listContacts();
        console.table(contacts);
        break;

    case 'get':
        const contact = await operations.getContactById(id);
        if (!contact) {
            throw new Error(`Contact with id=${id} not found`)
        }
        console.log(contact);
        break;

    case 'add':
        const updateContacts = await operations.add({name, email, phone});
        console.table(updateContacts);
        break;
      
    case 'remove':
        const removeContact = await operations.removeById(id);
        if (!removeContact) {
            throw new Error(`Contact with id=${id} not found`)
        }
        console.log(removeContact);
        break;

    default:
      console.warn('\x1B[31m Unknown action type!');
  }
}
invokeAction(options)

/*//contacts all
//invokeAction({action: 'list'});

//contact get by id
const id = 5;
//invokeAction({action: 'get', id});

//add
const newContact = {
    name: 'Anton',
    email: 'anton@mail.com',
    phone: '036-258-78-96'
}
//invokeAction({action: 'add', data: newContact});

//remove
invokeAction({action: 'remove', id});*/