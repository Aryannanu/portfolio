const contactService = require("../services/contact.service");

const addContactController = async (req, res) => {
    try {
        const contact = await contactService.addContact(req.body);
        return res.send(contact);
    } catch (error) {
        console.log("error in addContactController", error);
    }
};

const getContactController = async (req, res) => {
    try {
        const { developerId } = req.params;
        const contacts = await contactService.getContact(developerId);
        return res.send(contacts);
    } catch (error) {
        console.log("error in getContactController", error);
    }
};

module.exports = { addContactController, getContactController };
