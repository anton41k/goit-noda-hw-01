const listContacts = require('./listContacts');
const updateContacts = require('./updateContacts')

async function removeById(id) {
    try {
        const contacts = await listContacts();
        const idx = contacts.findIndex(contact => contact.id == id);
        if (idx === -1) {
            return null
        }
        const [removeContact] = contacts.splice(idx, 1);
        await updateContacts(contacts);
        return removeContact
    } catch (error) {
        return error.message;
    }
}
module.exports = removeById;