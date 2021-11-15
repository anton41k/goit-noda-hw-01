const listContacts = require('./listContacts');
const getContactById = require('./getContactById');
const add = require('./add');
const updateContacts = require('./updateContacts');
const removeById = require('./removeById');

module.exports = {
    listContacts,
    getContactById,
    add,
    removeById,
    updateContacts
}

/*const fs = require('fs').promises;
const path = require('path');
const {nanoid} = require('nanoid');

const contactsPath = path.join(__dirname, "./db/contacts.json");
 

async function listContacts() {
    try {
        const contactsFile = await fs.readFile(contactsPath, "utf8");
        const contactsParsed = JSON.parse(contactsFile);
        //console.table(contactsParsed);
    } catch (error) {
        console.log(error);
    }
}
listContacts()
async function getContactById(contactId) {
    try {
        const contactsFile = await fs.readFile(contactsPath, "utf8");
        const contactsParsed = JSON.parse(contactsFile);

        const con = contactsParsed.find(contact => contact.id === contactId)
        //console.log(con);
    } catch (error) {
        console.log(error);
    }
}
getContactById(2)
function removeContact(contactId) {
  // ...твой код
}

async function addContact(name, email, phone) {
    try {
        const contactsFile = await fs.readFile(contactsPath, "utf8");
        const contactsParsed = JSON.parse(contactsFile);
        const found = contactsParsed.find((contact) => contact.name === name);
        if (found) {
            console.log(`${name} is already in contacts`);
            return
        }
        const newContact = {
            id: nanoid(5),
            name,
            email,
            phone
        }
        const newContactsList = [...contactsParsed, newContact];
        await fs.writeFile(contactsPath, JSON.stringify(newContactsList, null, 2));
        console.table(contactsParsed);
        console.log(newContactsList);
    }
    catch{error => console.log(error.mesage)}
}
/*async function addContact(name, email, phone) {
  try {
    const contactsFile = await fs.readFile(contactsPath, "utf8");
    const contactsParsed = JSON.parse(contactsFile);
    contactsParsed.push({
      id: nanoid(2),
      name: name,
      email: email,
      phone: phone,
    });
    await fs.writeFile(contactsPath, JSON.stringify(contactsParsed, null, 2));
    console.table(contactsParsed);
  } catch (error) {
    console.log(error);
  }
}
addContact('Anton', 'anton@main.com', '123456789')
module.exports = {
    listContacts,
    getContactById,
    removeContact,
    addContact,
}*/