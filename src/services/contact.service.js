const Contact = require("../models/contact");

const addContact = async ({ developerId, email, phone, github, linkedin, instagram, location }) => {
    const contact = await Contact.create({
        developerId,
        email,
        phone,
        github,
        linkedin,
        instagram,
        location
    });
    return contact;
};

const getContact = async (developerId) => {
    const contacts = await Contact.findOne({ developerId });
    return contacts;
};

module.exports = { addContact, getContact };
