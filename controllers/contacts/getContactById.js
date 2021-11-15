const listContacts = require('./listContacts');

async function getContactById(id) {
    try {
        const contacts = await listContacts();
        const idx = contacts.findIndex(contact => contact.id == id);
        if (idx === -1) {
            return null
        }
        return contacts[idx];
    } catch (error) {
        return error.message;
    }
}
module.exports = getContactById;