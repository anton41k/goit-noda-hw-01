const fs = require('fs/promises');
const filePath = require('./filePath');

async function listContacts() {
    try {
        const contactsFile = await fs.readFile(filePath);
        const contactsParsed = JSON.parse(contactsFile);
        return contactsParsed;
    } catch (error) {
        return error.message;
    }
}
module.exports = listContacts;